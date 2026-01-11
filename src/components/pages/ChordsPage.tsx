import { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, Music } from 'lucide-react';
import { Button } from '../ui/button';
import { DifficultyBadge } from '../DifficultyBadge';
import { InstrumentTag } from '../InstrumentTag';
import { songsData } from '../../data/songsData';

interface ChordsPageProps {
  onNavigate: (page: string, songId?: string) => void;
}

export function ChordsPage({ onNavigate }: ChordsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInstrument, setSelectedInstrument] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [selectedLetter, setSelectedLetter] = useState<string>('All');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [showChordReference, setShowChordReference] = useState(false);

  const instruments = ['All', 'Guitar', 'Piano', 'Ukulele'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const languages = ['All', 'Hindi', 'English', 'Italian'];
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Filter songs based on all criteria
  const filteredSongs = songsData.filter((song) => {
    const matchesSearch =
      searchQuery === '' ||
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesInstrument = selectedInstrument === 'All' || song.instrument === selectedInstrument;
    const matchesDifficulty = selectedDifficulty === 'All' || song.difficulty === selectedDifficulty;
    const matchesLanguage = selectedLanguage === 'All' || song.language === selectedLanguage;
    const matchesLetter =
      selectedLetter === 'All' || song.title.charAt(0).toUpperCase() === selectedLetter;

    return matchesSearch && matchesInstrument && matchesDifficulty && matchesLanguage && matchesLetter;
  });

  const popularSongs = songsData.filter((song) => song.popular);
  const recentSongs = songsData.filter((song) => song.recentlyAdded);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Chords & Lyrics</h1>
            <p className="text-lg text-muted-foreground">
              Learn your favorite songs with accurate chords and lyrics
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 lg:top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-4">
        <div className="container mx-auto px-6 lg:px-12">
          <button 
            className="flex items-center gap-3 mb-4 w-full lg:hidden"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="font-semibold text-sm">Filters</span>
            <ChevronDown className={`w-5 h-5 ml-auto transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
          </button>

          <div className={`${filtersOpen ? 'block' : 'hidden'} lg:block space-y-4`}>
            {/* Search and Filters Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
              {/* Search Box */}
              <div className="relative lg:col-span-5">
                <label className="text-sm text-muted-foreground mb-2 block">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by song or artist..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-sm sm:text-base rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              {/* Instrument Filter */}
              <div className="lg:col-span-2">
                <label className="text-xs sm:text-sm text-muted-foreground mb-2 block">Instrument</label>
                <select
                  value={selectedInstrument}
                  onChange={(e) => setSelectedInstrument(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm sm:text-base rounded-xl sm:rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {instruments.map((inst) => (
                    <option key={inst} value={inst}>
                      {inst}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div className="lg:col-span-2">
                <label className="text-xs sm:text-sm text-muted-foreground mb-2 block">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm sm:text-base rounded-xl sm:rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {difficulties.map((diff) => (
                    <option key={diff} value={diff}>
                      {diff}
                    </option>
                  ))}
                </select>
              </div>

              {/* Language Filter */}
              <div className="lg:col-span-2">
                <label className="text-xs sm:text-sm text-muted-foreground mb-2 block">Language</label>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm sm:text-base rounded-xl sm:rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <div className="lg:col-span-1">
                <label className="text-xs sm:text-sm text-muted-foreground mb-2 block opacity-0 pointer-events-none">Clear</label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedInstrument('All');
                    setSelectedDifficulty('All');
                    setSelectedLanguage('All');
                    setSelectedLetter('All');
                  }}
                  className="w-full text-sm"
                >
                  Clear
                </Button>
              </div>
            </div>

            {/* A-Z Navigation */}
            <div className="flex flex-wrap gap-1">
              <button
                onClick={() => setSelectedLetter('All')}
                className={`px-2 sm:px-2.5 py-1 sm:py-1.5 text-xs sm:text-sm rounded transition-colors ${
                  selectedLetter === 'All'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-accent'
                }`}
              >
                All
              </button>
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`px-2 sm:px-2.5 py-1 sm:py-1.5 text-xs sm:text-sm rounded transition-colors ${
                    selectedLetter === letter
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Chord Reference Section */}
        <section className="mb-12 bg-card border border-border rounded-2xl p-6">
          <button
            onClick={() => setShowChordReference(!showChordReference)}
            className="flex items-center justify-between w-full mb-4"
          >
            <div className="flex items-center gap-3">
              <Music className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Chord Reference Guide</h2>
            </div>
            <ChevronDown className={`w-6 h-6 transition-transform ${showChordReference ? 'rotate-180' : ''}`} />
          </button>

          {showChordReference && (
            <div className="space-y-8 pt-4">
              {/* Major Chords */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Major Chords</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {['C', 'D', 'E', 'F', 'G', 'A', 'B'].map((chord) => (
                    <ChordDiagram key={chord} chord={chord} type="major" />
                  ))}
                </div>
              </div>

              {/* Minor Chords */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">Minor Chords</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {['Cm', 'Dm', 'Em', 'Fm', 'Gm', 'Am', 'Bm'].map((chord) => (
                    <ChordDiagram key={chord} chord={chord} type="minor" />
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> These are basic guitar chord shapes. Click on any song to see specific chord diagrams and finger positions for that song.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Popular Songs */}
        {searchQuery === '' && selectedInstrument === 'All' && selectedDifficulty === 'All' && selectedLanguage === 'All' && selectedLetter === 'All' && (
          <>
            <section className="mb-12">
              <h2 className="mb-6">Popular Songs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularSongs.map((song) => (
                  <SongCard key={song.id} song={song} onNavigate={onNavigate} />
                ))}
              </div>
            </section>

            {/* Recently Added */}
            <section className="mb-12">
              <h2 className="mb-6">Recently Added</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentSongs.map((song) => (
                  <SongCard key={song.id} song={song} onNavigate={onNavigate} />
                ))}
              </div>
            </section>
          </>
        )}

        {/* All Songs / Filtered Results */}
        <section>
          <h2 className="mb-6">
            {searchQuery || selectedInstrument !== 'All' || selectedDifficulty !== 'All' || selectedLanguage !== 'All' || selectedLetter !== 'All'
              ? `Search Results (${filteredSongs.length})`
              : 'All Songs'}
          </h2>

          {filteredSongs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSongs.map((song) => (
                <SongCard key={song.id} song={song} onNavigate={onNavigate} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">No songs found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedInstrument('All');
                  setSelectedDifficulty('All');
                  setSelectedLanguage('All');
                  setSelectedLetter('All');
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </section>
      </div>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Want to Master These Songs?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join our expert-led music classes and learn to play your favorite songs with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => onNavigate('contact')}
            >
              Book a Free Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('courses')}
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              View Our Courses
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

interface SongCardProps {
  song: {
    id: string;
    title: string;
    artist: string;
    instrument: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    language: string;
  };
  onNavigate: (page: string, songId?: string) => void;
}

function SongCard({ song, onNavigate }: SongCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg mb-1">{song.title}</h3>
          <p className="text-sm text-muted-foreground">{song.artist}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <InstrumentTag instrument={song.instrument} size="sm" />
        <DifficultyBadge level={song.difficulty} size="sm" />
        <span className="inline-flex items-center px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground">
          {song.language}
        </span>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onNavigate('song-detail', song.id)}
        className="w-full"
      >
        View Chords
      </Button>
    </div>
  );
}

interface ChordDiagramProps {
  chord: string;
  type: 'major' | 'minor';
}

function ChordDiagram({ chord, type }: ChordDiagramProps) {
  // Guitar chord finger positions (simplified representations)
  const chordData: Record<string, { frets: (number | 'x')[], fingers?: string }> = {
    'C': { frets: ['x', 3, 2, 0, 1, 0], fingers: '032010' },
    'D': { frets: ['x', 'x', 0, 2, 3, 2], fingers: 'xx0132' },
    'E': { frets: [0, 2, 2, 1, 0, 0], fingers: '022100' },
    'F': { frets: [1, 3, 3, 2, 1, 1], fingers: '133211' },
    'G': { frets: [3, 2, 0, 0, 0, 3], fingers: '320003' },
    'A': { frets: ['x', 0, 2, 2, 2, 0], fingers: 'x02220' },
    'B': { frets: ['x', 2, 4, 4, 4, 2], fingers: 'x24442' },
    'Cm': { frets: ['x', 3, 5, 5, 4, 3], fingers: 'x35543' },
    'Dm': { frets: ['x', 'x', 0, 2, 3, 1], fingers: 'xx0231' },
    'Em': { frets: [0, 2, 2, 0, 0, 0], fingers: '022000' },
    'Fm': { frets: [1, 3, 3, 1, 1, 1], fingers: '133111' },
    'Gm': { frets: [3, 5, 5, 3, 3, 3], fingers: '355333' },
    'Am': { frets: ['x', 0, 2, 2, 1, 0], fingers: 'x02210' },
    'Bm': { frets: ['x', 2, 4, 4, 3, 2], fingers: 'x24432' },
  };

  const data = chordData[chord] || { frets: [0, 0, 0, 0, 0, 0] };
  const displayName = chord.replace('m', '');
  const suffix = type === 'minor' ? 'm' : '';

  return (
    <div className="bg-background border border-border rounded-lg p-3 hover:border-primary/50 transition-all">
      {/* Chord Name */}
      <div className="text-center mb-3">
        <p className="text-lg font-bold">{displayName}{suffix}</p>
        <p className="text-xs text-muted-foreground">{type === 'major' ? 'Major' : 'Minor'}</p>
      </div>

      {/* Guitar Fretboard Diagram */}
      <div className="relative">
        <svg className="w-full" viewBox="0 0 80 100" preserveAspectRatio="xMidYMid meet">
          {/* Fret lines (horizontal) */}
          {[0, 1, 2, 3, 4].map((fret) => (
            <line
              key={`fret-${fret}`}
              x1="10"
              y1={20 + fret * 15}
              x2="70"
              y2={20 + fret * 15}
              stroke="currentColor"
              strokeWidth={fret === 0 ? "2" : "1"}
              opacity="0.5"
            />
          ))}

          {/* String lines (vertical) */}
          {[0, 1, 2, 3, 4, 5].map((string) => (
            <line
              key={`string-${string}`}
              x1={10 + string * 12}
              y1="20"
              x2={10 + string * 12}
              y2="80"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.5"
            />
          ))}

          {/* Finger positions */}
          {data.frets.map((fret, index) => {
            if (fret === 'x') {
              // X mark for muted strings
              return (
                <text
                  key={`x-${index}`}
                  x={10 + index * 12}
                  y="15"
                  textAnchor="middle"
                  className="text-xs fill-current opacity-70"
                >
                  ×
                </text>
              );
            } else if (fret === 0) {
              // O mark for open strings
              return (
                <circle
                  key={`o-${index}`}
                  cx={10 + index * 12}
                  cy="10"
                  r="3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.7"
                />
              );
            } else {
              // Finger position dot
              const yPos = 20 + (fret as number - 0.5) * 15;
              return (
                <circle
                  key={`dot-${index}`}
                  cx={10 + index * 12}
                  cy={yPos}
                  r="4"
                  className="fill-primary"
                />
              );
            }
          })}
        </svg>
      </div>

      {/* Fingering pattern */}
      <div className="text-center mt-2">
        <p className="text-xs font-mono text-muted-foreground">{data.fingers}</p>
      </div>
    </div>
  );
}