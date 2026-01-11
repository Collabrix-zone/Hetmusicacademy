import { Card } from './ui/card';
import { ResourceTypeBadge } from './ResourceTypeBadge';
import { DifficultyBadge } from './DifficultyBadge';
import { InstrumentTag } from './InstrumentTag';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Resource } from '../data/resourcesData';
import { Eye, Download, ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
  onClick: () => void;
}

export function ResourceCard({ resource, onClick }: ResourceCardProps) {
  const levelMap: Record<string, 'beginner' | 'intermediate' | 'advanced'> = {
    beginner: 'beginner',
    intermediate: 'intermediate',
    advanced: 'advanced',
  };

  return (
    <Card 
      className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
      onClick={onClick}
    >
      {/* Thumbnail */}
      {resource.thumbnail && (
        <div className="relative aspect-video overflow-hidden bg-accent">
          <ImageWithFallback
            src={resource.thumbnail}
            alt={resource.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <ResourceTypeBadge type={resource.type} size="sm" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {resource.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {resource.description}
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap gap-2 mb-4">
          {!resource.thumbnail && (
            <ResourceTypeBadge type={resource.type} size="sm" />
          )}
          {resource.instrument !== 'all' && (
            <InstrumentTag instrument={resource.instrument} size="sm" />
          )}
          {resource.level !== 'all' && (
            <DifficultyBadge level={levelMap[resource.level]} size="sm" />
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            <span>{resource.views.toLocaleString()} views</span>
          </div>
          <div className="flex items-center gap-1 text-primary group-hover:translate-x-1 transition-transform">
            {resource.type === 'link' ? (
              <>
                <span className="font-medium">Open</span>
                <ExternalLink className="w-3 h-3" />
              </>
            ) : (
              <>
                <span className="font-medium">View</span>
                <Download className="w-3 h-3" />
              </>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
