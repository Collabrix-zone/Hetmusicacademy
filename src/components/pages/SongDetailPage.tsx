import { useState } from 'react';
import { ArrowLeft, Copy, Printer, Share2, Music, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../ui/button';
import { DifficultyBadge } from '../DifficultyBadge';
import { InstrumentTag } from '../InstrumentTag';
import { songsData } from '../../data/songsData';
import { ChordDiagram } from '../ChordDiagram';
import { transposeLyrics, transposeChordArray, transposeKey } from '../../utils/chordTransposer';

interface SongDetailPageProps {
  songId: string;
  onNavigate: (page: string, songId?: string) => void;
}

export function SongDetailPage({ songId, onNavigate }: SongDetailPageProps) {
  const song = songsData.find((s) => s.id === songId);
  const [textSize, setTextSize] = useState(16);
  const [copied, setCopied] = useState(false);
  const [showChordReference, setShowChordReference] = useState(true);
  const [transposeSteps, setTransposeSteps] = useState(0);
  const [selectedScale, setSelectedScale] = useState<'major' | 'minor'>('major');

  if (!song) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="mb-4">Song not found</h2>
        <Button onClick={() => onNavigate('chords')}>Back to Chords & Lyrics</Button>
      </div>
    );
  }

  // Get related songs (same artist or same difficulty/instrument)
  const relatedSongs = songsData
    .filter(
      (s) =>
        s.id !== song.id &&
        (s.artist === song.artist || (s.difficulty === song.difficulty && s.instrument === song.instrument))
    )
    .slice(0, 3);

  const handleCopy = () => {
    const textToCopy = `${song.title} - ${song.artist}\n\n${song.lyrics}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${song.title} - ${song.artist}`,
        text: `Check out the chords for ${song.title} by ${song.artist}`,
        url: window.location.href,
      });
    } else {
      handleCopy();
    }
  };

  const increaseTextSize = () => {
    if (textSize < 24) setTextSize(textSize + 2);
  };

  const decreaseTextSize = () => {
    if (textSize > 12) setTextSize(textSize - 2);
  };

  const handleTransposeUp = () => {
    setTransposeSteps(transposeSteps + 1);
  };

  const handleTransposeDown = () => {
    setTransposeSteps(transposeSteps - 1);
  };

  const handleResetTranspose = () => {
    setTransposeSteps(0);
  };

  // Calculate transposed values
  const transposedChords = song.chords ? transposeChordArray(song.chords, transposeSteps) : [];
  const transposedLyrics = transposeLyrics(song.lyrics, transposeSteps);
  const transposedKey = transposeKey(song.key, transposeSteps);

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => onNavigate('chords')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all songs
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Song Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <InstrumentTag instrument={song.instrument} />
              <DifficultyBadge level={song.difficulty} />
              <span className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                {song.language}
              </span>
            </div>

            <h1 className="mb-2">{song.title}</h1>
            <h2 className="text-muted-foreground mb-6">{song.artist}</h2>

            {/* Song Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-secondary rounded-lg">
              {song.key && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Key</p>
                  <p className="font-medium">{song.key}</p>
                </div>
              )}
              {song.capo && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Capo</p>
                  <p className="font-medium">{song.capo}</p>
                </div>
              )}
              {song.tempo && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Tempo</p>
                  <p className="font-medium">{song.tempo}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-muted-foreground mb-1">Level</p>
                <p className="font-medium">{song.difficulty}</p>
              </div>
            </div>
          </div>

          {/* Chord Diagrams Section */}
          {song.chords && song.chords.length > 0 && (
            <div className="mb-8 bg-card border border-border rounded-2xl p-6">
              <button
                onClick={() => setShowChordReference(!showChordReference)}
                className="flex items-center justify-between w-full mb-4"
              >
                <div className="flex items-center gap-3">
                  <Music className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Chords Used in This Song</h2>
                </div>
                <ChevronDown className={`w-6 h-6 transition-transform ${showChordReference ? 'rotate-180' : ''}`} />
              </button>

              {showChordReference && (
                <div className="pt-4">
                  {/* Transpose Controls */}
                  <div className="mb-6 bg-gradient-to-r from-primary/5 to-accent/5 border border-border rounded-xl p-4">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Music className="w-5 h-5 text-primary" />
                      Transpose
                    </h3>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleTransposeDown}
                        className="flex-1"
                      >
                        <ChevronDown className="w-4 h-4 mr-1" />
                        Down
                      </Button>
                      
                      <div className="flex flex-col items-center gap-1 min-w-[120px]">
                        <div className="text-sm text-muted-foreground">Current Key</div>
                        <div className="text-2xl font-bold text-primary">{transposedKey}</div>
                        {transposeSteps !== 0 && (
                          <div className="text-xs text-muted-foreground">
                            {transposeSteps > 0 ? '+' : ''}{transposeSteps} semitones
                          </div>
                        )}
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleTransposeUp}
                        className="flex-1"
                      >
                        <ChevronUp className="w-4 h-4 mr-1" />
                        Up
                      </Button>
                    </div>

                    {transposeSteps !== 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleResetTranspose}
                        className="w-full mt-3"
                      >
                        Reset to Original ({song.key})
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {transposedChords.map((chord) => (
                      <ChordDiagram key={chord} chord={chord} />
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>How to read:</strong> Numbers show finger positions, 'x' means don't play that string, 'o' means play open string.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Controls Bar */}
          <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-y border-border py-4 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Text Size:</span>
                <button
                  onClick={decreaseTextSize}
                  disabled={textSize <= 12}
                  className="p-2 hover:bg-accent rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Decrease text size"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium min-w-[3rem] text-center">{textSize}px</span>
                <button
                  onClick={increaseTextSize}
                  disabled={textSize >= 24}
                  className="p-2 hover:bg-accent rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Increase text size"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="w-4 h-4 mr-2" />
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
                <Button variant="outline" size="sm" onClick={handlePrint}>
                  <Printer className="w-4 h-4 mr-2" />
                  Print
                </Button>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Lyrics & Chords */}
          <div className="mb-12">
            <div className="bg-card border border-border rounded-lg p-6 md:p-8">
              <pre
                className="whitespace-pre-wrap font-mono leading-relaxed"
                style={{ fontSize: `${textSize}px` }}
              >
                {transposedLyrics}
              </pre>
            </div>

            <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Chords are shown in square brackets [like this] above the lyrics. Practice slowly and gradually increase tempo.
              </p>
            </div>
          </div>

          {/* Related Songs */}
          {relatedSongs.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6">Related Songs</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedSongs.map((relatedSong) => (
                  <div
                    key={relatedSong.id}
                    className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-base mb-1">{relatedSong.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{relatedSong.artist}</p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <InstrumentTag instrument={relatedSong.instrument} size="sm" />
                      <DifficultyBadge level={relatedSong.difficulty} size="sm" />
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onNavigate('song-detail', relatedSong.id)}
                      className="w-full"
                    >
                      View Chords
                    </Button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <Music className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="mb-3">Want to Learn This Song Properly?</h3>
            <p className="text-muted-foreground mb-6">
              Join our expert-led {song.instrument.toLowerCase()} classes and master songs like this with personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => onNavigate('contact')}>
                Book a Free Demo
              </Button>
              <Button variant="outline" size="lg" onClick={() => onNavigate('courses')}>
                View {song.instrument} Course
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}