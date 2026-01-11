import { Button } from '../ui/button';
import { ModeBadge } from '../ModeBadge';
import { 
  Music2, 
  Users, 
  Award, 
  Clock, 
  Target, 
  Sparkles,
  Monitor,
  MapPin,
  GitMerge,
  ArrowRight,
  Phone
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ClientsCarousel } from '../ClientsCarousel';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const courses = [
    {
      id: 'guitar',
      name: 'Guitar',
      image: 'https://images.unsplash.com/photo-1636581563713-5ead3fb53a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRlbnQlMjBndWl0YXJ8ZW58MXx8fHwxNzY4MDU5OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      levels: 'Beginner to Advanced',
    },
    {
      id: 'piano',
      name: 'Piano',
      image: 'https://images.unsplash.com/photo-1636464808108-644053e72420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWFubyUyMGxlc3NvbnN8ZW58MXx8fHwxNzY4MDU5OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      levels: 'Beginner to Advanced',
    },
    {
      id: 'singing',
      name: 'Singing',
      image: 'https://images.unsplash.com/photo-1597169428801-7c1adf2623bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5naW5nJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzY4MDU5OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      levels: 'Beginner to Advanced',
    },
    {
      id: 'violin',
      name: 'Violin',
      image: 'https://images.unsplash.com/photo-1692552951845-cb7762a29638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW9saW4lMjBwbGF5ZXJ8ZW58MXx8fHwxNzY4MDU5OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      levels: 'Beginner to Advanced',
    },
    {
      id: 'flute',
      name: 'Flute',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800',
      levels: 'Beginner to Advanced',
    },
    {
      id: 'drums',
      name: 'Drums',
      image: 'https://images.unsplash.com/photo-1543443829-5a41f7c2b2e8?w=800',
      levels: 'Beginner to Advanced',
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from experienced musicians with 10+ years of teaching expertise',
    },
    {
      icon: Clock,
      title: 'Flexible Batches',
      description: 'Choose timings that work for you',
    },
    {
      icon: Target,
      title: 'Personalized Learning',
      description: 'Customized curriculum for your skill level',
    },
    {
      icon: Award,
      title: 'Certified Courses',
      description: 'Recognized certifications on completion',
    },
    {
      icon: Music2,
      title: 'All Instruments',
      description: 'Comprehensive training in 6 instruments',
    },
    {
      icon: Sparkles,
      title: 'Performance Opportunities',
      description: 'Regular recitals to showcase your talent',
    },
  ];

  const learningModes = [
    {
      icon: Monitor,
      title: 'Online',
      description: 'Learn from anywhere with live video classes and recordings',
      color: 'blue',
    },
    {
      icon: MapPin,
      title: 'Offline',
      description: 'In-person classes at our state-of-the-art facilities',
      color: 'purple',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28" aria-labelledby="hero-heading">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Join 1000+ Happy Students</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Learn Music <span className="text-primary">Your Way</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert-led online & offline music classes for all ages. Master your favorite instrument with personalized guidance.
            </p>

            {/* Mode Badges */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <ModeBadge mode="Online" size="lg" />
              <ModeBadge mode="Offline" size="lg" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" onClick={() => onNavigate('contact')}>
                Book a Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('tel:+919876543210')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Choose Your Instrument
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive training in multiple instruments with flexible learning modes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={course.image}
                    alt={`${course.name} lessons`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{course.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Music2 className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{course.levels}</span>
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

          <div className="text-center mt-8">
            <Button size="lg" variant="outline" onClick={() => onNavigate('courses')}>
              View All Courses
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Modes Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Learn on Your Terms
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the learning mode that fits your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {learningModes.map((mode) => (
              <div
                key={mode.title}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <mode.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{mode.title}</h3>
                <p className="text-muted-foreground">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience quality music education with modern teaching methods
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Musical Journey?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Book your free demo class today and discover your musical potential
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => onNavigate('contact')}
              >
                Book Free Demo Class
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('tel:+919876543210')}
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Carousel */}
      <ClientsCarousel />
    </div>
  );
}