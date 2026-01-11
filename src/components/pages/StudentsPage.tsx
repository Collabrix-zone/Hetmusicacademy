import { useState } from 'react';
import { Button } from '../ui/button';
import { Play, Award, Trophy, Star, ArrowRight, Quote } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface StudentsPageProps {
  onNavigate: (page: string) => void;
}

export function StudentsPage({ onNavigate }: StudentsPageProps) {
  const testimonials = [
    {
      id: 1,
      name: 'Riya Sharma',
      course: 'Piano',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      text: 'The faculty is incredible! I achieved my Grade 8 Piano with distinction thanks to their guidance.',
      achievement: 'Trinity College Grade 8 - Distinction',
    },
    {
      id: 2,
      name: 'Aditya Verma',
      course: 'Guitar',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      text: 'Flexible online classes made it easy to learn while managing my studies. Best decision ever!',
      achievement: 'First Place - Inter-School Competition',
    },
    {
      id: 3,
      name: 'Sneha Patel',
      course: 'Singing',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      text: 'The personalized attention and structured curriculum helped me discover my true potential.',
      achievement: 'ABRSM Grade 6 - Merit',
    },
    {
      id: 4,
      name: 'Arjun Reddy',
      course: 'Violin',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      text: 'From beginner to performing at state festivals - this academy transformed my musical journey.',
      achievement: 'State Music Festival Performer',
    },
    {
      id: 5,
      name: 'Priya Mehta',
      course: 'Guitar',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
      text: 'Amazing teachers who genuinely care about your progress. Highly recommend for all ages!',
      achievement: 'Rockschool Grade 7 - Distinction',
    },
    {
      id: 6,
      name: 'Rohan Khanna',
      age: 20,
      course: 'Guitar',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      text: 'The flexible learning options were perfect for me. Great facilities and expert guidance all the way.',
      achievement: 'Battle of Bands Winner',
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: '150+ Certifications',
      description: 'Students achieving grades & diplomas',
    },
    {
      icon: Star,
      title: '200+ Performances',
      description: 'Recitals and public performances',
    },
    {
      icon: Award,
      title: '50+ Competition Wins',
      description: 'Inter-school and state-level awards',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Students</h1>
            <p className="text-lg text-muted-foreground">
              Celebrating the musical journey and achievements of our talented students
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Performances</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Overview */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">Student Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">Student Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.course} Student</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">{testimonial.achievement}</span>
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
              Join Our Growing Community
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Start your musical journey today and be the next success story
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