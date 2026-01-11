interface DifficultyBadgeProps {
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  size?: 'sm' | 'md';
}

export function DifficultyBadge({ level, size = 'md' }: DifficultyBadgeProps) {
  const colors = {
    Beginner: 'bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-100 border-green-900 dark:border-green-100',
    Intermediate: 'bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-100 border-amber-900 dark:border-amber-100',
    Advanced: 'bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-100 border-red-900 dark:border-red-100',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border-2 font-semibold ${colors[level]} ${sizes[size]}`}
    >
      {level}
    </span>
  );
}