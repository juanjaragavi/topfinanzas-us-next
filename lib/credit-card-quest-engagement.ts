const QUEST_ENGAGEMENT_STORAGE_KEY = "tf_cc_quest_engagement_v1";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function getQuestEngagementCount(): number {
  if (!isBrowser()) {
    return 0;
  }

  const raw = window.sessionStorage.getItem(QUEST_ENGAGEMENT_STORAGE_KEY);
  if (!raw) {
    return 0;
  }

  const parsed = Number(raw);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return 0;
  }

  return parsed;
}

export function setQuestEngagementCount(nextCount: number): number {
  if (!isBrowser()) {
    return 0;
  }

  const safeCount = Math.max(0, Math.floor(nextCount));
  window.sessionStorage.setItem(
    QUEST_ENGAGEMENT_STORAGE_KEY,
    String(safeCount),
  );
  return safeCount;
}

export function incrementQuestEngagementCount(step = 1): number {
  const current = getQuestEngagementCount();
  return setQuestEngagementCount(current + Math.max(1, Math.floor(step)));
}
