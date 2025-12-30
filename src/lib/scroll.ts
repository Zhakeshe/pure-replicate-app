export const smoothScrollToSection = (
  id: string,
  onScrollStart?: () => void,
  onScrollEnd?: () => void,
  durationMs = 1000,
) => {
  if (typeof window === "undefined") return;

  const target = document.getElementById(id);
  if (!target) return;

  onScrollStart?.();
  target.scrollIntoView({ behavior: "smooth", block: "start" });

  const timeout = window.setTimeout(() => {
    onScrollEnd?.();
  }, durationMs);

  return () => {
    window.clearTimeout(timeout);
    onScrollEnd?.();
  };
};
