/**
 * SectionDivider — a soft, fog-like gradient that replaces hard divider lines.
 * Use between any two sections to create a smooth blended transition.
 *
 * @param from - the starting color (defaults to transparent)
 * @param to   - the ending color (defaults to the page bg)
 * @param flip - flips the gradient direction (bottom-to-top instead of top-to-bottom)
 */
export default function SectionDivider({
  from = "transparent",
  to = "var(--color-background)",
  flip = false,
  className = "",
}: {
  from?: string;
  to?: string;
  flip?: boolean;
  className?: string;
}) {
  const direction = flip ? "to top" : "to bottom";

  return (
    <div
      aria-hidden="true"
      className={`relative z-10 pointer-events-none h-32 md:h-48 -mt-32 md:-mt-48 ${className}`}
      style={{
        background: `linear-gradient(${direction}, ${from}, ${to})`,
      }}
    />
  );
}
