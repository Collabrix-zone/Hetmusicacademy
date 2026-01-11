import type { ResourceType } from '../data/resourcesData';
import { FileText, Download, BookOpen, Image, ExternalLink } from 'lucide-react';

interface ResourceTypeBadgeProps {
  type: ResourceType;
  size?: 'sm' | 'md';
}

export function ResourceTypeBadge({ type, size = 'sm' }: ResourceTypeBadgeProps) {
  const sizeClasses = size === 'sm' ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1.5';
  
  const configs: Record<ResourceType, { label: string; icon: any; className: string }> = {
    pdf: {
      label: 'PDF',
      icon: FileText,
      className: 'bg-red-500/10 text-red-700 dark:text-red-300',
    },
    worksheet: {
      label: 'Worksheet',
      icon: Download,
      className: 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
    },
    notes: {
      label: 'Notes',
      icon: BookOpen,
      className: 'bg-purple-500/10 text-purple-700 dark:text-purple-300',
    },
    image: {
      label: 'Image',
      icon: Image,
      className: 'bg-green-500/10 text-green-700 dark:text-green-300',
    },
    link: {
      label: 'Link',
      icon: ExternalLink,
      className: 'bg-orange-500/10 text-orange-700 dark:text-orange-300',
    },
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full font-medium ${sizeClasses} ${config.className}`}>
      <Icon className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />
      {config.label}
    </span>
  );
}
