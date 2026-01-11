import { Music, Piano, Mic2 } from 'lucide-react';

interface InstrumentTagProps {
  instrument: string;
  size?: 'sm' | 'md';
}

export function InstrumentTag({ instrument, size = 'md' }: InstrumentTagProps) {
  const getIcon = () => {
    switch (instrument.toLowerCase()) {
      case 'piano':
      case 'keyboard':
        return <Piano className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />;
      case 'singing':
      case 'vocals':
        return <Mic2 className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />;
      default:
        return <Music className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />;
    }
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-xs gap-1',
    md: 'px-3 py-1.5 text-sm gap-1.5',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full bg-indigo-50 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-100 border-2 border-indigo-900 dark:border-indigo-100 font-semibold ${sizes[size]}`}
    >
      {getIcon()}
      {instrument}
    </span>
  );
}