import { Button } from '../ui/button';
import { ModeBadge } from '../ModeBadge';
import { Award, ArrowRight, Mail, Phone } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface FacultyPageProps {
  onNavigate: (page: string) => void;
}

export function FacultyPage({ onNavigate }: FacultyPageProps) {
  const facultyMembers = [
    {
      name: 'Jatin Sir',
      instrument: 'Guitar & Music Director',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400',
      experience: '15+ years',
      qualifications: 'Trinity College Certified, Performance Graduate',
      modes: ['online', 'offline'] as const,
      phone: '+91 98253 84388',
      email: 'jatinlimbad@gmail.com',
    },
    {
      name: 'Hitesh Sir',
      instrument: 'Piano & Music Theory',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      specialization: 'Classical & Contemporary Piano',
      experience: '12+ years',
      modes: ['online', 'offline'] as const,
      phone: '+91 98240 98074',
      email: 'hiteshlimbad74@gmail.com',
    },
    {
      name: 'Hetvi Mam',
      instrument: 'Singing & Vocals',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      specialization: 'Online Sessions Specialist',
      qualifications: 'Hindustani Classical Trained, Vocal Coach',
      modes: ['online'] as const,
      phone: '+91 70165 14240',
      email: 'hetvi@hetmusicacademy.com',
    },
    {
      name: 'Utsav Sir',
      instrument: 'Live Performance & Stage',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      specialization: 'Live Show Expert',
      qualifications: 'Performance Artist, Stage Management',
      modes: ['offline'] as const,
      phone: '+91 81122 70486',
      email: 'utsav@hetmusicacademy.com',
    },
    {
      name: 'Shailly Mam',
      instrument: 'Violin & String Instruments',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
      specialization: 'Online Sessions Specialist',
      qualifications: 'Classical Violin Expert, Music Pedagogy Certified',
      modes: ['online'] as const,
      phone: '+91 81603 12927',
      email: 'shailly@hetmusicacademy.com',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Meet Our Expert Faculty</h1>
            <p className="text-lg text-muted-foreground">
              Learn from highly qualified and experienced music educators dedicated to your growth
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyMembers.map((member) => (
              <div
                key={member.name}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="relative h-64">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-sm text-white/80">{member.instrument}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{member.experience} Experience</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {member.qualifications}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.modes.map((mode) => (
                      <ModeBadge 
                        key={mode} 
                        mode={mode.charAt(0).toUpperCase() + mode.slice(1) as 'Online' | 'Offline'} 
                        size="sm" 
                      />
                    ))}
                  </div>

                  <div className="space-y-2 pt-4 border-t border-border">
                    <a 
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{member.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Learn from the Best?
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Book a free demo class and meet your future music teacher
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