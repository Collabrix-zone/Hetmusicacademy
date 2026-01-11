interface ModeBadgeProps {
  mode: 'Online' | 'Offline';
  size?: 'sm' | 'md' | 'lg';
}

export function ModeBadge({ mode, size = 'md' }: ModeBadgeProps) {
  const modeColors = {
    Online: 'bg-blue-50 text-blue-900 dark:bg-blue-950 dark:text-blue-100 border-blue-900 dark:border-blue-100',
    Offline: 'bg-purple-50 text-purple-900 dark:bg-purple-950 dark:text-purple-100 border-purple-900 dark:border-purple-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border-2 font-semibold transition-all ${modeColors[mode]} ${sizes[size]}`}
    >
      {mode}
    </span>
  );
}