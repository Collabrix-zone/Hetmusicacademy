import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ResourceTypeBadge } from '../ResourceTypeBadge';
import { DifficultyBadge } from '../DifficultyBadge';
import { InstrumentTag } from '../InstrumentTag';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { resourcesData } from '../../data/resourcesData';
import { 
  Download, 
  ExternalLink, 
  MessageCircle, 
  Eye, 
  Calendar,
  ChevronRight,
  Home,
  FileText
} from 'lucide-react';

interface ResourceDetailPageProps {
  resourceId: string;
  onNavigate: (page: string, id?: string) => void;
}

export function ResourceDetailPage({ resourceId, onNavigate }: ResourceDetailPageProps) {
  const resource = resourcesData.find(r => r.id === resourceId);

  if (!resource) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Resource Not Found</h1>
        <Button onClick={() => onNavigate('resources')}>Back to Resources</Button>
      </div>
    );
  }

  const levelMap: Record<string, 'beginner' | 'intermediate' | 'advanced'> = {
    beginner: 'beginner',
    intermediate: 'intermediate',
    advanced: 'advanced',
  };

  // Find related resources
  const relatedResources = resourcesData
    .filter(r => 
      r.id !== resource.id && 
      (r.instrument === resource.instrument || r.type === resource.type) &&
      r.level === resource.level
    )
    .slice(0, 3);

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/919876543210?text=Hi, I have a question about the resource: ${resource.title}`,
      '_blank'
    );
  };

  const handleDownload = () => {
    if (resource.type === 'link' && resource.externalUrl) {
      window.open(resource.externalUrl, '_blank');
    } else if (resource.fileUrl) {
      // In a real app, this would trigger a download
      console.log('Downloading:', resource.fileUrl);
      alert('Download functionality would be implemented in production');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="flex flex-col">
      {/* Breadcrumbs */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <button 
              onClick={() => onNavigate('home')}
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              Home
            </button>
            <ChevronRight className="w-4 h-4" />
            <button 
              onClick={() => onNavigate('resources')}
              className="hover:text-foreground transition-colors"
            >
              Resources
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground truncate">{resource.title}</span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <ResourceTypeBadge type={resource.type} size="md" />
              {resource.instrument !== 'all' && (
                <InstrumentTag instrument={resource.instrument} size="md" />
              )}
              {resource.level !== 'all' && (
                <DifficultyBadge level={levelMap[resource.level]} size="md" />
              )}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{resource.title}</h1>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Added {formatDate(resource.dateAdded)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{resource.views.toLocaleString()} views</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>{resource.language}</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {resource.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleDownload}>
                {resource.type === 'link' ? (
                  <>
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Open Resource
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Download
                  </>
                )}
              </Button>
              <Button size="lg" variant="outline" onClick={handleWhatsApp}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Ask a Question
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              {resource.type === 'link' && resource.externalUrl ? (
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ExternalLink className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">External Resource</h3>
                  <p className="text-muted-foreground mb-6">
                    This resource is hosted on an external website
                  </p>
                  <Button onClick={() => window.open(resource.externalUrl, '_blank')}>
                    Open in New Tab
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ) : resource.type === 'image' && resource.fileUrl ? (
                <div className="p-4">
                  <ImageWithFallback
                    src={resource.fileUrl}
                    alt={resource.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {resource.type === 'pdf' ? 'PDF Document' : 
                     resource.type === 'worksheet' ? 'Practice Worksheet' : 
                     'Study Notes'}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {resource.type === 'pdf' 
                      ? 'Download this PDF to view the complete document'
                      : resource.type === 'worksheet'
                      ? 'Download this worksheet to practice'
                      : 'Download these notes for your studies'}
                  </p>
                  <Button onClick={handleDownload}>
                    <Download className="w-5 h-5 mr-2" />
                    Download Now
                  </Button>
                </div>
              )}
            </Card>

            {/* Tags */}
            {resource.tags.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">TAGS</h3>
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-sm bg-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Course Section */}
      {resource.relatedCourseId && (
        <section className="py-12 lg:py-16 bg-secondary">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/30">
                <h3 className="text-2xl font-bold mb-4">Want to Learn More?</h3>
                <p className="text-muted-foreground mb-6">
                  This resource is part of our {resource.instrument.charAt(0).toUpperCase() + resource.instrument.slice(1)} curriculum. 
                  Explore our comprehensive course to master this instrument.
                </p>
                <Button onClick={() => onNavigate('course-detail', resource.relatedCourseId)}>
                  View {resource.instrument.charAt(0).toUpperCase() + resource.instrument.slice(1)} Course
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Related Resources */}
      {relatedResources.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Related Resources</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedResources.map((related) => (
                  <Card 
                    key={related.id}
                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
                    onClick={() => onNavigate('resource-detail', related.id)}
                  >
                    {related.thumbnail && (
                      <div className="relative aspect-video overflow-hidden bg-accent">
                        <ImageWithFallback
                          src={related.thumbnail}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {related.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Need Personalized Guidance?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our expert instructors can help you make the most of these resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => onNavigate('contact')}>
                Book a Free Demo
              </Button>
              <Button size="lg" variant="outline" onClick={handleWhatsApp}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
