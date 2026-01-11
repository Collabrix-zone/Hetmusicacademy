import { useState } from 'react';
import { Menu, X, Phone, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

export function Header({ currentPage, onNavigate, theme, onThemeToggle }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Courses', id: 'courses' },
    { name: 'Resources', id: 'resources' },
    { name: 'Faculty', id: 'faculty' },
    { name: 'Students', id: 'students' },
    { name: 'Chords & Lyrics', id: 'chords' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Minimal */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg px-2 -ml-2"
            aria-label="Go to home page"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground text-base" aria-hidden="true">♪</span>
            </div>
            <span className="text-base font-semibold tracking-tight">Het Music Academy</span>
          </button>

          {/* Desktop Navigation - Clean horizontal list */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1 py-1 ${
                  currentPage === item.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-current={currentPage === item.id ? 'page' : undefined}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs - Minimal spacing */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onThemeToggle}
              className="p-2 hover:bg-muted rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Sun className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('tel:+919876543210')}
              className="gap-2"
              aria-label="Call us at +91 98765 43210"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call</span>
            </Button>
            
            <Button
              size="sm"
              onClick={() => onNavigate('contact')}
            >
              Book Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onThemeToggle}
              className="p-2 hover:bg-muted rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Sun className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
            <button
              className="p-2 hover:bg-muted rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Clean list */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg text-left transition-colors text-sm font-medium ${
                    currentPage === item.id
                      ? 'bg-muted text-foreground'
                      : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                  }`}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
