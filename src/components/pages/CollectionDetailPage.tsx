import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ResourceCard } from '../ResourceCard';
import { collectionsData, resourcesData } from '../../data/resourcesData';
import { Button } from '../ui/button';
import { Home, ChevronRight, BookOpen } from 'lucide-react';

interface CollectionDetailPageProps {
  collectionId: string;
  onNavigate: (page: string, id?: string) => void;
}

export function CollectionDetailPage({ collectionId, onNavigate }: CollectionDetailPageProps) {
  const collection = collectionsData.find(c => c.id === collectionId);

  if (!collection) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Collection Not Found</h1>
        <Button onClick={() => onNavigate('collections')}>Back to Collections</Button>
      </div>
    );
  }

  // Get resources in this collection
  const collectionResources = resourcesData.filter(r => 
    collection.resourceIds.includes(r.id)
  );

  // Get other collections
  const otherCollections = collectionsData.filter(c => c.id !== collection.id).slice(0, 3);

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
              onClick={() => onNavigate('collections')}
              className="hover:text-foreground transition-colors"
            >
              Collections
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground truncate">{collection.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <BookOpen className="w-4 h-4" />
                  {collection.resourceIds.length} Resources
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">{collection.title}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {collection.description}
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={collection.coverImage}
                  alt={collection.title}
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources in Collection */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Resources in This Collection</h2>
            {collectionResources.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {collectionResources.map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    resource={resource}
                    onClick={() => onNavigate('resource-detail', resource.id)}
                  />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <p className="text-muted-foreground">No resources in this collection yet.</p>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Other Collections */}
      {otherCollections.length > 0 && (
        <section className="py-12 lg:py-16 bg-secondary">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold mb-8">More Collections</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherCollections.map((other) => (
                  <Card
                    key={other.id}
                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
                    onClick={() => onNavigate('collection-detail', other.id)}
                  >
                    <div className="relative aspect-video overflow-hidden bg-accent">
                      <ImageWithFallback
                        src={other.coverImage}
                        alt={other.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-background/90 backdrop-blur px-2.5 py-1 rounded-full text-xs font-medium">
                        {other.resourceIds.length} items
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {other.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {other.description}
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Learn?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start with a free demo class and get personalized guidance from our expert instructors
            </p>
            <Button size="lg" onClick={() => onNavigate('contact')}>
              Book a Free Demo Class
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
