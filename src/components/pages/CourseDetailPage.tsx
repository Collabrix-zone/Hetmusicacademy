import { Button } from '../ui/button';
import { ModeBadge } from '../ModeBadge';
import { 
  ArrowRight, 
  Clock, 
  Users, 
  Target, 
  Award,
  Phone,
  CheckCircle2,
  ChevronLeft
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CourseDetailPageProps {
  courseId: string;
  onNavigate: (page: string) => void;
}

export function CourseDetailPage({ courseId, onNavigate }: CourseDetailPageProps) {
  const courseData: Record<string, any> = {
    guitar: {
      name: 'Guitar',
      tagline: 'Master the Art of Guitar Playing',
      image: 'https://images.unsplash.com/photo-1636581563713-5ead3fb53a80?w=1200',
      description: 'Comprehensive guitar training covering acoustic and electric guitar techniques, from basic chords to advanced improvisation.',
      modes: ['online', 'offline'] as const,
      whoIsThisFor: [
        'Complete beginners with no music background',
        'Intermediate players looking to refine technique',
        'Advanced players wanting to master specific styles',
        'Hobby musicians and aspiring professionals',
      ],
      learningOutcomes: [
        'Master essential chords and strumming patterns',
        'Read guitar tabs and sheet music',
        'Play songs across multiple genres',
        'Develop improvisation skills',
        'Understand music theory fundamentals',
        'Build performance confidence',
      ],
      duration: '3-6 months per level',
      batchOptions: ['Weekday Morning', 'Weekday Evening', 'Weekend', 'Custom Schedule'],
      startingPrice: '3,500',
    },
    piano: {
      name: 'Piano',
      tagline: 'Unlock Your Piano Potential',
      image: 'https://images.unsplash.com/photo-1636464808108-644053e72420?w=1200',
      description: 'Complete piano curriculum from beginner basics to advanced performance, including classical and contemporary styles.',
      modes: ['online', 'offline'] as const,
      whoIsThisFor: [
        'Beginners wanting to learn piano from scratch',
        'Students preparing for grade exams',
        'Adults returning to music after a break',
        'Children aged 8 and above',
      ],
      learningOutcomes: [
        'Proper hand positioning and technique',
        'Sight-reading and music notation',
        'Play classical and contemporary pieces',
        'Chord progressions and harmonization',
        'Music theory and composition basics',
        'Performance and stage presence',
      ],
      duration: '3-6 months per level',
      batchOptions: ['Weekday Afternoon', 'Weekday Evening', 'Weekend Morning', 'Custom Schedule'],
      startingPrice: '4,000',
    },
    singing: {
      name: 'Singing',
      tagline: 'Discover Your Voice',
      image: 'https://images.unsplash.com/photo-1597169428801-7c1adf2623bd?w=1200',
      description: 'Professional vocal training covering breath control, pitch, tone, and performance techniques for all music genres.',
      modes: ['online', 'offline'] as const,
      whoIsThisFor: [
        'Aspiring singers of all skill levels',
        'Public speakers wanting voice improvement',
        'Music enthusiasts passionate about singing',
        'Students preparing for auditions',
      ],
      learningOutcomes: [
        'Proper breathing and vocal techniques',
        'Pitch control and ear training',
        'Expand vocal range safely',
        'Sing across multiple genres',
        'Stage presence and mic techniques',
        'Build vocal stamina and strength',
      ],
      duration: '3-6 months per level',
      batchOptions: ['Morning Sessions', 'Evening Sessions', 'Weekend', 'Custom Schedule'],
      startingPrice: '3,000',
    },
    violin: {
      name: 'Violin',
      tagline: 'Master the Classical Violin',
      image: 'https://images.unsplash.com/photo-1692552951845-cb7762a29638?w=1200',
      description: 'Classical and contemporary violin training with focus on technique, posture, and musical expression.',
      modes: ['online', 'offline'] as const,
      whoIsThisFor: [
        'Beginners starting their violin journey',
        'Students preparing for exams',
        'Classical music enthusiasts',
        'Anyone interested in string instruments',
      ],
      learningOutcomes: [
        'Proper bowing and finger techniques',
        'Read music notation and scales',
        'Play classical and contemporary pieces',
        'Understand violin maintenance',
        'Develop ear training skills',
        'Performance confidence',
      ],
      duration: '4-8 months per level',
      batchOptions: ['Weekday Sessions', 'Weekend', 'Custom Schedule'],
      startingPrice: '4,500',
    },
    flute: {
      name: 'Flute',
      tagline: 'Learn the Melodious Flute',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1200',
      description: 'Flute training emphasizing breath control, finger technique, and musical expression.',
      modes: ['online', 'offline'] as const,
      whoIsThisFor: [
        'Beginners with no prior experience',
        'Students preparing for certifications',
        'Classical and modern music lovers',
        'Adults and children aged 10+',
      ],
      learningOutcomes: [
        'Proper embouchure and breathing',
        'Finger technique and articulation',
        'Play classical and contemporary music',
        'Music theory basics',
        'Solo and ensemble performance',
        'Tone production mastery',
      ],
      duration: '3-6 months per level',
      batchOptions: ['Morning Batch', 'Evening Batch', 'Weekend', 'Custom Schedule'],
      startingPrice: '3,500',
    },
    drums: {
      name: 'Drums',
      tagline: 'Master Rhythm and Percussion',
      image: 'https://images.unsplash.com/photo-1543443829-5a41f7c2b2e8?w=1200',
      description: 'Structured drum lessons covering rhythm, timing, coordination, and multiple music styles.',
      modes: ['offline'] as const,
      whoIsThisFor: [
        'Complete beginners to drumming',
        'Intermediate drummers refining skills',
        'Rhythm enthusiasts of all ages',
        'Band musicians',
      ],
      learningOutcomes: [
        'Master basic to advanced rhythms',
        'Develop hand-foot coordination',
        'Play across multiple genres',
        'Read drum notation',
        'Solo and band performance skills',
        'Build stamina and technique',
      ],
      duration: '4-8 months per level',
      batchOptions: ['Weekday Evening', 'Weekend', 'Custom Schedule'],
      startingPrice: '5,000',
    },
  };

  const course = courseData[courseId] || courseData.guitar;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <button
            onClick={() => onNavigate('courses')}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Courses
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{course.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{course.tagline}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {course.modes.map((mode: string) => (
                  <ModeBadge 
                    key={mode} 
                    mode={mode.charAt(0).toUpperCase() + mode.slice(1) as 'Online' | 'Offline' | 'Hybrid'} 
                    size="lg" 
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-8">{course.description}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" onClick={() => onNavigate('contact')}>
                  Book Free Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.open('tel:+919876543210')}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={course.image}
                alt={course.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Info */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Duration</h3>
                <p className="text-sm text-muted-foreground">{course.duration}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Batch Size</h3>
                <p className="text-sm text-muted-foreground">Small groups or 1-on-1</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Starting From</h3>
                <p className="text-sm text-muted-foreground">₹{course.startingPrice}/month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who Is This For?</h2>
              <div className="space-y-3">
                {course.whoIsThisFor.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
              <div className="space-y-3">
                {course.learningOutcomes.map((outcome: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Batch Options */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Flexible Batch Timings</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {course.batchOptions.map((option: string) => (
              <div
                key={option}
                className="bg-card border border-border rounded-lg p-4 text-center"
              >
                <p className="font-medium">{option}</p>
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
              Ready to Start Your {course.name} Journey?
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Book your free demo class today and meet your instructor
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