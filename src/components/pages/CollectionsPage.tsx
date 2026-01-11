import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { collectionsData, resourcesData } from '../../data/resourcesData';
import { Button } from '../ui/button';
import { BookOpen, Star, ChevronRight } from 'lucide-react';

interface CollectionsPageProps {
  onNavigate: (page: string, id?: string) => void;
}

export function CollectionsPage({ onNavigate }: CollectionsPageProps) {
  const featuredCollections = collectionsData.filter(c => c.featured);
  const allCollections = collectionsData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Resource Collections</h1>
            <p className="text-lg text-muted-foreground">
              Curated collections of learning materials organized by topic and skill level
            </p>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      {featuredCollections.length > 0 && (
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 mb-8">
              <Star className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Featured Collections</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCollections.map((collection) => (
                <Card
                  key={collection.id}
                  className="group cursor-pointer hover:border-primary/50 transition-all overflow-hidden"
                  onClick={() => onNavigate('collection-detail', collection.id)}
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={collection.coverImage}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm font-medium">
                      {collection.resourceIds.length} Resources
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {collection.description}
                    </p>
                    <div className="flex items-center text-primary font-medium text-sm">
                      <span>View Collection</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Collections */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold mb-8">All Collections</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allCollections.map((collection) => (
              <Card
                key={collection.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
                onClick={() => onNavigate('collection-detail', collection.id)}
              >
                <div className="relative aspect-video overflow-hidden bg-accent">
                  <ImageWithFallback
                    src={collection.coverImage}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-background/90 backdrop-blur px-2.5 py-1 rounded-full text-xs font-medium">
                    {collection.resourceIds.length} items
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {collection.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Looking for Something Specific?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Browse our full library of individual resources or contact us for personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => onNavigate('resources')}>
                Browse All Resources
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('contact')}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}