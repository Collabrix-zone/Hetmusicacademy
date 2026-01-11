import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ClientsCarousel() {
  const [position, setPosition] = useState(0);

  // Mock client logos - replace with actual client logos later
  const clients = [
    {
      name: "Client 1",
      logo: "https://lh3.googleusercontent.com/d/1DdGxdFBX5h1vYEl630ruzHLsggQqxwwZ",
    },
    {
      name: "Client 2",
      logo: "https://lh3.googleusercontent.com/d/181FK63SidseY072euxxfrXfKc6TRMZur",
    },
    {
      name: "Client 3",
      logo: "https://lh3.googleusercontent.com/d/1oHndA7KRCzU8-nYuMZiAflGjCD6l1SZ8",
    },
    {
      name: "Client 4",
      logo: "https://lh3.googleusercontent.com/d/12-YqeA6ZCijW8JMvovtKuoCpRkvT868U",
    },
    {
      name: "Client 5",
      logo: "https://lh3.googleusercontent.com/d/1w4qjZaatAW7OGsN_NH6Pu-5R5PErz5t8",
    },
    {
      name: "Client 6",
      logo: "https://lh3.googleusercontent.com/d/1XZ3uv-yvwJaVrcBeqnXUFqwDyWpGm8gM",
    },
    // Placeholders for remaining 13 logos - replace URLs when ready
    // { name: 'Client 7', logo: 'https://via.placeholder.com/150x80/8B5CF6/FFFFFF?text=Logo+7' },
    // { name: 'Client 8', logo: 'https://via.placeholder.com/150x80/FF6B6B/FFFFFF?text=Logo+8' },
    // { name: 'Client 9', logo: 'https://via.placeholder.com/150x80/8B5CF6/FFFFFF?text=Logo+9' },
    // { name: 'Client 10', logo: 'https://via.placeholder.com/150x80/FF6B6B/FFFFFF?text=Logo+10' },
    // { name: 'Client 11', logo: 'https://via.placeholder.com/150x80/8B5CF6/FFFFFF?text=Logo+11' },
    // { name: 'Client 12', logo: 'https://via.placeholder.com/150x80/FF6B6B/FFFFFF?text=Logo+12' },
    // { name: 'Client 13', logo: 'https://via.placeholder.com/150x80/8B5CF6/FFFFFF?text=Logo+13' },
    // { name: 'Client 14', logo: 'https://via.placeholder.com/150x80/FF6B6B/FFFFFF?text=Logo+14' },
    // { name: 'Client 15', logo: 'https://via.placeholder.com/150x80/8B5CF6/FFFFFF?text=Logo+15' },
    // { name: 'Client 16', logo: 'https://via.placeholder.com/150x80/FF6B6B/FFFFFF?text=Logo+16' },
    // { name: 'Client 17', logo: 'https://via.placeholder.com/150x80/8B5CF6/FFFFFF?text=Logo+17' },
    // { name: 'Client 18', logo: 'https://via.placeholder.com/150x80/FF6B6B/FFFFFF?text=Logo+18' },
    // { name: 'Client 19', logo: 'https://via.placeholder.com/150x80/8B5CF6/FFFFFF?text=Logo+19' },
  ];

  // Only enable scrolling if there are more than 6 logos
  const shouldScroll = clients.length > 6;

  // Double the array for seamless looping (only if scrolling)
  const displayClients = shouldScroll ? [...clients, ...clients] : clients;

  useEffect(() => {
    if (!shouldScroll) return; // Don't scroll if not enough logos

    const interval = setInterval(() => {
      setPosition((prev) => {
        // Reset to 0 when we've scrolled through one complete set
        if (prev <= -100) {
          return 0;
        }
        return prev - 0.1; // Reduced speed for slower scrolling
      });
    }, 30);

    return () => clearInterval(interval);
  }, [shouldScroll]);

  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-2xl font-bold text-center mb-8">
          Trusted by Leading Organizations
        </h2>

        <div className="relative overflow-hidden">
          {/* Gradient overlays - only show when scrolling */}
          {shouldScroll && (
            <>
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" />
            </>
          )}

          {/* Container - centered if not scrolling, scrolling if enough logos */}
          <div
            className={shouldScroll ? "flex gap-12 items-center" : "flex gap-12 items-center justify-center flex-wrap"}
            style={
              shouldScroll
                ? {
                    transform: `translateX(${position}%)`,
                    transition:
                      position === 0 ? "none" : "transform 0.03s linear",
                  }
                : undefined
            }
          >
            {displayClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity duration-300"
              >
                <ImageWithFallback
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}