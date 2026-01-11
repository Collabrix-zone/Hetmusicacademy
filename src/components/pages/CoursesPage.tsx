import { useState } from 'react';
import { Button } from '../ui/button';
import { ModeBadge } from '../ModeBadge';
import { ArrowRight, Filter, X } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CoursesPageProps {
  onNavigate: (page: string, courseId?: string) => void;
}

export function CoursesPage({ onNavigate }: CoursesPageProps) {
  const [selectedMode, setSelectedMode] = useState<string>('all');
  const [selectedInstrument, setSelectedInstrument] = useState<string>('all');

  const allCourses = [
    {
      id: 'guitar',
      name: 'Guitar',
      category: 'String Instruments',
      description: 'Master acoustic and electric guitar with structured lessons covering chords, scales, and techniques.',
      modes: ['online', 'offline'] as const,
      duration: '3-6 months per level',
      image: 'https://images.unsplash.com/photo-1636581563713-5ead3fb53a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRlbnQlMjBndWl0YXJ8ZW58MXx8fHwxNzY4MDU5OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: 'From ₹4,000/month',
    },
    {
      id: 'piano',
      name: 'Piano',
      category: 'Keyboard Instruments',
      description: 'Learn piano from basics to advanced techniques including sight-reading, theory, and performance.',
      modes: ['online', 'offline'] as const,
      duration: '3-6 months per level',
      image: 'https://images.unsplash.com/photo-1636464808108-644053e72420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWFubyUyMGxlc3NvbnN8ZW58MXx8fHwxNzY4MDU5OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: 'From ₹4,500/month',
    },
    {
      id: 'singing',
      name: 'Singing',
      category: 'Vocal Training',
      description: 'Develop your voice with breath control, pitch training, and performance techniques for all genres.',
      modes: ['online', 'offline'] as const,
      duration: '3-6 months per level',
      image: 'https://images.unsplash.com/photo-1597169428801-7c1adf2623bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5naW5nJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzY4MDU5OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: 'From ₹3,500/month',
    },
    {
      id: 'violin',
      name: 'Violin',
      category: 'String Instruments',
      description: 'Classical and contemporary violin training focusing on posture, bowing, and music theory.',
      modes: ['online', 'offline'] as const,
      duration: '4-8 months per level',
      image: 'https://images.unsplash.com/photo-1692552951845-cb7762a29638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW9saW4lMjBwbGF5ZXJ8ZW58MXx8fHwxNzY4MDU5OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: 'From ₹4,500/month',
    },
    {
      id: 'flute',
      name: 'Flute',
      category: 'Wind Instruments',
      description: 'Learn flute with emphasis on breath control, finger technique, and musical expression.',
      modes: ['online', 'offline'] as const,
      duration: '3-6 months per level',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800',
      price: 'From ₹3,500/month',
    },
    {
      id: 'drums',
      name: 'Drums',
      category: 'Percussion',
      description: 'Master rhythm, timing, and coordination with structured drum lessons for all styles.',
      modes: ['offline'] as const,
      duration: '4-8 months per level',
      image: 'https://images.unsplash.com/photo-1543443829-5a41f7c2b2e8?w=800',
      price: 'From ₹5,000/month',
    },
  ];

  const filteredCourses = allCourses.filter((course) => {
    const modeMatch = selectedMode === 'all' || course.modes.includes(selectedMode as any);
    const instrumentMatch = selectedInstrument === 'all' || course.id === selectedInstrument;
    return modeMatch && instrumentMatch;
  });

  const hasFilters = selectedMode !== 'all' || selectedInstrument !== 'all';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Music Courses</h1>
            <p className="text-lg text-muted-foreground">
              Choose from our comprehensive range of music courses designed for all skill levels
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 lg:top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-4">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <h3 className="font-semibold text-sm">Filter Courses</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Instrument</label>
              <select
                value={selectedInstrument}
                onChange={(e) => setSelectedInstrument(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              >
                <option value="all">All Instruments</option>
                <option value="guitar">Guitar</option>
                <option value="piano">Piano</option>
                <option value="singing">Singing</option>
                <option value="violin">Violin</option>
                <option value="flute">Flute</option>
                <option value="drums">Drums</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Learning Mode</label>
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              >
                <option value="all">All Modes</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>
          </div>

          {hasFilters && (
            <div className="mt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedMode('all');
                  setSelectedInstrument('all');
                }}
              >
                <X className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No courses match your filters. Try adjusting your selection.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={course.image}
                      alt={`${course.name} course`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">{course.name}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.modes.map((mode) => (
                        <ModeBadge 
                          key={mode} 
                          mode={mode.charAt(0).toUpperCase() + mode.slice(1) as 'Online' | 'Offline' | 'Hybrid'} 
                          size="sm" 
                        />
                      ))}
                    </div>

                    <div className="text-xs text-muted-foreground mb-4">
                      Duration: {course.duration}
                    </div>

                    <div className="text-xs text-muted-foreground mb-4">
                      Price: {course.price}
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => onNavigate('course-detail', course.id)}
                      className="w-full"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Not Sure Which Course to Choose?
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Book a free demo class and our expert faculty will help you find the perfect course for your goals
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => onNavigate('contact')}
            >
              Book Free Demo Class
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}