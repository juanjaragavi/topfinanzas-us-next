import { logger } from "@/lib/logger";
export const RECOMMENDER_LOCK_COOKIE = "tf_recommender_lock";
export const RECOMMENDER_LOCK_STORAGE_KEY = "tf_recommender_lock";
export const RECOMMENDER_LOCK_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days
const RECOMMENDER_PATH_PATTERN =
  /^\/(?:credit-card-recommender|recomendador-de-tarjetas-de-credito)(?:-[a-z0-9-]+)?(?:\/.+)?$/i;

export interface RecommenderLockPayload {
  pathname: string;
  search?: string;
  storedAt: number;
  version: 1;
}

const LOCK_VERSION = 1;

function normalizePathname(pathname: string): string {
  if (!pathname) {
    return "";
  }

  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function normalizeSearch(search?: string | null): string {
  if (!search) {
    return "";
  }

  const trimmed = search.trim();
  if (!trimmed) {
    return "";
  }

  return trimmed.startsWith("?") ? trimmed : `?${trimmed}`;
}

export function isValidRecommenderPath(pathname: string): boolean {
  return RECOMMENDER_PATH_PATTERN.test(pathname);
}

export function createRecommenderLockPayload(
  pathname: string,
  search?: string | null,
): RecommenderLockPayload | null {
  const normalizedPath = normalizePathname(pathname);
  if (!isValidRecommenderPath(normalizedPath)) {
    return null;
  }

  return {
    pathname: normalizedPath,
    search: normalizeSearch(search),
    storedAt: Date.now(),
    version: LOCK_VERSION,
  };
}

export function encodeRecommenderLock(payload: RecommenderLockPayload): string {
  return encodeURIComponent(JSON.stringify(payload));
}

export function decodeRecommenderLock(
  raw: string | undefined | null,
): RecommenderLockPayload | null {
  if (!raw) {
    return null;
  }

  try {
    const decoded = decodeURIComponent(raw);
    const parsed = JSON.parse(decoded) as Partial<RecommenderLockPayload>;

    if (
      typeof parsed.pathname !== "string" ||
      !isValidRecommenderPath(parsed.pathname) ||
      typeof parsed.storedAt !== "number" ||
      parsed.version !== LOCK_VERSION
    ) {
      return null;
    }

    return {
      pathname: normalizePathname(parsed.pathname),
      search: normalizeSearch(parsed.search),
      storedAt: parsed.storedAt,
      version: LOCK_VERSION,
    };
  } catch (error) {
    logger.error("Failed to decode recommender lock payload", error);
    return null;
  }
}

function readCookieValue(name: string): string | null {
  if (typeof document === "undefined") {
    return null;
  }

  const cookieString = document.cookie;
  if (!cookieString) {
    return null;
  }

  const cookies = cookieString.split("; ");
  for (const cookie of cookies) {
    if (!cookie) continue;
    const [cookieName, ...rest] = cookie.split("=");
    if (cookieName === name) {
      return rest.join("=");
    }
  }

  return null;
}

function safeGetLocalStorage(key: string): string | null {
  if (typeof window === "undefined" || !window.localStorage) {
    return null;
  }

  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    logger.error("Failed to access localStorage", error);
    return null;
  }
}

function safeSetLocalStorage(key: string, value: string) {
  if (typeof window === "undefined" || !window.localStorage) {
    return;
  }

  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    logger.error("Failed to write to localStorage", error);
  }
}

function safeRemoveLocalStorage(key: string) {
  if (typeof window === "undefined" || !window.localStorage) {
    return;
  }

  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    logger.error("Failed to remove item from localStorage", error);
  }
}

export function persistRecommenderLockClientSide(
  payload: RecommenderLockPayload,
) {
  if (typeof document === "undefined") {
    return;
  }

  const encoded = encodeRecommenderLock(payload);
  const secureFlag =
    typeof window !== "undefined" && window.location.protocol === "https:"
      ? "; Secure"
      : "";

  document.cookie = `${RECOMMENDER_LOCK_COOKIE}=${encoded}; Max-Age=${RECOMMENDER_LOCK_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secureFlag}`;
  safeSetLocalStorage(RECOMMENDER_LOCK_STORAGE_KEY, encoded);
}

export function clearRecommenderLockClientSide() {
  if (typeof document !== "undefined") {
    document.cookie = `${RECOMMENDER_LOCK_COOKIE}=; Max-Age=0; Path=/; SameSite=Lax`;
  }

  safeRemoveLocalStorage(RECOMMENDER_LOCK_STORAGE_KEY);
}

export function readRecommenderLockFromClient(): RecommenderLockPayload | null {
  const localValue = safeGetLocalStorage(RECOMMENDER_LOCK_STORAGE_KEY);
  const localPayload = decodeRecommenderLock(localValue);
  if (localPayload) {
    return localPayload;
  }

  const cookieValue = readCookieValue(RECOMMENDER_LOCK_COOKIE);
  const cookiePayload = decodeRecommenderLock(cookieValue);
  if (cookiePayload) {
    return cookiePayload;
  }

  return null;
}

export function buildRedirectPath(payload: RecommenderLockPayload): string {
  return `${payload.pathname}${payload.search ?? ""}`;
}

export function parseLockFromRequestCookie(
  cookie: { value: string } | undefined,
): RecommenderLockPayload | null {
  if (!cookie) {
    return null;
  }

  return decodeRecommenderLock(cookie.value);
}
