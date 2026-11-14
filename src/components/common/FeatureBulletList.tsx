export interface FeatureBulletItem {
  label?: string;
  text: string;
}

interface FeatureBulletListProps {
  items: (string | FeatureBulletItem)[];
  className?: string;
  columns?: 1 | 2 | 3;
}

export function FeatureBulletList({
  items,
  className = "",
  columns = 1,
}: FeatureBulletListProps) {
  const gridClasses =
    columns === 2
      ? "grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
      : columns === 3
      ? "grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3"
      : "space-y-3";

  return (
    <ul className={`${gridClasses} ${className}`}>
      {items.map((item, index) => {
        const isString = typeof item === "string";
        const label = isString ? undefined : item.label;
        const text = isString ? item : item.text;

        return (
          <li key={index} className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base 2xl:text-lg text-brand-ink leading-relaxed">
            <span className="mt-2 size-2 shrink-0 rounded-full bg-brand-accent" />
            <span>
              {label ? (
                <>
                  <strong className="font-semibold text-brand-ink">{label}: </strong>
                  <span className="text-brand-muted">{text}</span>
                </>
              ) : (
                text
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
