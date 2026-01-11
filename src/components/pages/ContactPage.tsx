import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle2,
  Instagram,
  Facebook,
  Youtube,
  Twitter
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    mode: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        mode: '',
        message: '',
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+91 98253 84388',
      action: 'tel:+919825384388',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      detail: 'Chat with us',
      action: 'https://wa.me/919825384388',
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'jatinlimbad@gmail.com',
      action: 'mailto:jatinlimbad@gmail.com',
    },
  ];

  const locations = [
    {
      name: 'Shahibaug Branch',
      address: 'F6-F7, First Floor, Jay Complex, Vitthalnagar Cross Road, Shahibaug, Ahmedabad – 380 004',
      phone: '+91 98253 84388',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5!2d72.5745!3d23.0489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzU2LjAiTiA3MsKwMzQnMjguMiJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin',
    },
    {
      name: 'Satellite Branch',
      address: '121, The Grand Monarch Complex, Near Seema Hall, 100 ft. Anandnagar Road, Satellite, Ahmedabad – 380 015',
      phone: '+91 98240 98074',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9!2d72.5245!3d23.0289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzQ0LjAiTiA3MsKwMzEnMjguMiJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Book Your Free Demo Class</h1>
            <p className="text-lg text-muted-foreground">
              Take the first step towards your musical journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : undefined}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{method.title}</h3>
                <p className="text-sm text-muted-foreground">{method.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Info */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Demo Class Registration</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      We've received your request. Our team will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2">Full Name *</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">Choose Course *</label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                        required
                      >
                        <option value="">Select an instrument</option>
                        <option value="guitar">Guitar</option>
                        <option value="piano">Piano</option>
                        <option value="singing">Singing/Vocals</option>
                        <option value="violin">Violin</option>
                        <option value="flute">Flute</option>
                        <option value="drums">Drums</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm mb-2">Preferred Learning Mode *</label>
                      <select
                        id="mode"
                        name="mode"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">Select Mode</option>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm mb-2">Additional Message (Optional)</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your musical goals..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-5 h-5 mr-2" />
                      Submit Request
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Locations */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
              <div className="space-y-6 mb-8">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-2xl p-6"
                  >
                    <h3 className="text-lg font-semibold mb-3">
                      {location.name}
                    </h3>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{location.address}</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                        <a 
                          href={`tel:${location.phone.replace(/\s/g, '')}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">Mon-Sat: 9 AM - 9 PM</p>
                      </div>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
                      <iframe
                        src={location.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map of ${location.name}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Follow Us Section */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay updated with our latest news, events, and student performances
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/hetmusicacademy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/hetmusicacademy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC23gQfCLAjks4wfh2QwIR9w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                    aria-label="Subscribe on YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/music_het"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                    aria-label="Follow us on X (Twitter)"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}