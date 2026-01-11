import { Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

interface MobileBottomCTAProps {
  onBookDemo: () => void;
}

export function MobileBottomCTA({ onBookDemo }: MobileBottomCTAProps) {
  return (
    <nav 
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border/50 shadow-2xl safe-area-inset-bottom"
      aria-label="Mobile quick actions"
    >
      <div className="container mx-auto px-3 sm:px-6 py-3 pb-safe">
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open('tel:+919876543210')}
            className="flex-col h-auto py-2.5 sm:py-3 gap-1 sm:gap-1.5"
            aria-label="Call us at +91 98765 43210"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            <span className="text-[10px] sm:text-xs">Call</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              window.open('https://wa.me/919876543210?text=Hi, I would like to know more about your music courses')
            }
            className="flex-col h-auto py-2.5 sm:py-3 gap-1 sm:gap-1.5"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            <span className="text-[10px] sm:text-xs">WhatsApp</span>
          </Button>

          <Button
            size="sm"
            onClick={onBookDemo}
            className="flex-col h-auto py-2.5 sm:py-3 gap-1 sm:gap-1.5 shadow-lg shadow-primary/30"
            aria-label="Book a free demo class"
          >
            <span className="text-[10px] sm:text-xs font-semibold">Book Demo</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}