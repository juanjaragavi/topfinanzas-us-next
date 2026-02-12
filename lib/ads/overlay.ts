// ⚠️ OVERLAY FUNCTIONALITY COMPLETELY REMOVED ⚠️
// The overlay was causing unsolicited blur that blocks page content.
// All overlay functions are permanently disabled.
// Only TopAds ad units should add any visual elements to the page.

// All overlay functions are now no-ops
export function ensureOverlay(): HTMLDivElement {
  // Return dummy element that does nothing
  const dummy = document.createElement("div");
  dummy.style.display = "none";
  return dummy;
}

export function showOverlay(): void {
  // No-op: overlay permanently disabled
  return;
}

export function hideOverlay(): void {
  // No-op: overlay permanently disabled
  return;
}

export function destroyOverlay(): void {
  // No-op: overlay permanently disabled
  return;
}
