import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-base">♪</span>
              </div>
              <span className="text-sm font-semibold">Het Music Academy</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Expert-led music education with flexible learning modes for all age groups.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Courses', id: 'courses' },
                { label: 'Faculty', id: 'faculty' },
                { label: 'Students', id: 'students' },
                { label: 'Resources', id: 'resources' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Courses</h3>
            <div className="flex flex-col gap-2">
              {['Guitar', 'Piano', 'Singing', 'Violin', 'Flute', 'Drums'].map((course) => (
                <button
                  key={course}
                  onClick={() => onNavigate('courses')}
                  className="text-muted-foreground hover:text-foreground text-sm text-left transition-colors"
                >
                  {course}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919825384388"
                className="flex items-start gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 98253 84388</span>
              </a>
              <a
                href="mailto:jatinlimbad@gmail.com"
                className="flex items-start gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>jatinlimbad@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Shahibaug & Satellite, Ahmedabad</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/hetmusicacademy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/hetmusicacademy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC23gQfCLAjks4wfh2QwIR9w"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                aria-label="Subscribe on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/music_het"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © 2026 Het Music Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}