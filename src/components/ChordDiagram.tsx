interface ChordDiagramProps {
  chord: string;
}

export function ChordDiagram({ chord }: ChordDiagramProps) {
  // Guitar chord finger positions (simplified representations)
  const chordData: Record<string, { frets: (number | 'x')[], fingers?: string }> = {
    // Major Chords
    'C': { frets: ['x', 3, 2, 0, 1, 0], fingers: 'x32010' },
    'D': { frets: ['x', 'x', 0, 2, 3, 2], fingers: 'xx0232' },
    'E': { frets: [0, 2, 2, 1, 0, 0], fingers: '022100' },
    'F': { frets: [1, 3, 3, 2, 1, 1], fingers: '133211' },
    'G': { frets: [3, 2, 0, 0, 0, 3], fingers: '320003' },
    'A': { frets: ['x', 0, 2, 2, 2, 0], fingers: 'x02220' },
    'B': { frets: ['x', 2, 4, 4, 4, 2], fingers: 'x24442' },
    
    // Minor Chords
    'Cm': { frets: ['x', 3, 5, 5, 4, 3], fingers: 'x35543' },
    'Dm': { frets: ['x', 'x', 0, 2, 3, 1], fingers: 'xx0231' },
    'Em': { frets: [0, 2, 2, 0, 0, 0], fingers: '022000' },
    'Fm': { frets: [1, 3, 3, 1, 1, 1], fingers: '133111' },
    'Gm': { frets: [3, 5, 5, 3, 3, 3], fingers: '355333' },
    'Am': { frets: ['x', 0, 2, 2, 1, 0], fingers: 'x02210' },
    'Bm': { frets: ['x', 2, 4, 4, 3, 2], fingers: 'x24432' },
    
    // 7th Chords
    'C7': { frets: ['x', 3, 2, 3, 1, 0], fingers: 'x32310' },
    'D7': { frets: ['x', 'x', 0, 2, 1, 2], fingers: 'xx0212' },
    'E7': { frets: [0, 2, 0, 1, 0, 0], fingers: '020100' },
    'F7': { frets: [1, 3, 1, 2, 1, 1], fingers: '131211' },
    'G7': { frets: [3, 2, 0, 0, 0, 1], fingers: '320001' },
    'A7': { frets: ['x', 0, 2, 0, 2, 0], fingers: 'x02020' },
    'B7': { frets: ['x', 2, 1, 2, 0, 2], fingers: 'x21202' },
    
    // Major 7th Chords
    'Cmaj7': { frets: ['x', 3, 2, 0, 0, 0], fingers: 'x32000' },
    'Dmaj7': { frets: ['x', 'x', 0, 2, 2, 2], fingers: 'xx0222' },
    'Emaj7': { frets: [0, 2, 1, 1, 0, 0], fingers: '021100' },
    'Fmaj7': { frets: [1, 3, 2, 2, 1, 1], fingers: '132211' },
    'Gmaj7': { frets: [3, 2, 0, 0, 0, 2], fingers: '320002' },
    'Amaj7': { frets: ['x', 0, 2, 1, 2, 0], fingers: 'x02120' },
    'Bmaj7': { frets: ['x', 2, 4, 3, 4, 2], fingers: 'x24342' },
    
    // Sus Chords
    'Asus2': { frets: ['x', 0, 2, 2, 0, 0], fingers: 'x02200' },
    'Asus4': { frets: ['x', 0, 2, 2, 3, 0], fingers: 'x02230' },
    'Dsus2': { frets: ['x', 'x', 0, 2, 3, 0], fingers: 'xx0230' },
    'Dsus4': { frets: ['x', 'x', 0, 2, 3, 3], fingers: 'xx0233' },
    'Esus4': { frets: [0, 2, 2, 2, 0, 0], fingers: '022200' },
    'Gsus4': { frets: [3, 3, 0, 0, 1, 3], fingers: '330013' },
  };

  const data = chordData[chord] || { frets: [0, 0, 0, 0, 0, 0], fingers: '000000' };
  
  // Determine chord type for color
  const isMinor = chord.includes('m') && !chord.includes('maj');
  const isSeventh = chord.includes('7');
  const isSus = chord.includes('sus');

  return (
    <div className="bg-background border border-border rounded-lg p-3 hover:border-primary/50 transition-all">
      {/* Chord Name */}
      <div className="text-center mb-3">
        <p className="text-lg font-bold">{chord}</p>
        <p className="text-xs text-muted-foreground">
          {isMinor ? 'Minor' : isSeventh ? 'Seventh' : isSus ? 'Suspended' : 'Major'}
        </p>
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
                  className={isMinor ? 'fill-accent' : 'fill-primary'}
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
