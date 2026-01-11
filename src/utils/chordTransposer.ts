// Musical notes in chromatic order
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const NOTES_FLAT = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

/**
 * Transpose a chord by a given number of semitones
 */
export function transposeChord(chord: string, steps: number): string {
  if (!chord || steps === 0) return chord;

  // Extract the root note and the rest (quality, extensions, etc.)
  const match = chord.match(/^([A-G][b#]?)(.*)/);
  if (!match) return chord;

  const [, root, suffix] = match;

  // Determine if we should use flats or sharps
  const useFlats = root.includes('b');
  const notes = useFlats ? NOTES_FLAT : NOTES;

  // Find current position
  let currentIndex = notes.indexOf(root);
  if (currentIndex === -1) {
    // Try the other notation
    const altNotes = useFlats ? NOTES : NOTES_FLAT;
    currentIndex = altNotes.indexOf(root);
    if (currentIndex === -1) return chord;
  }

  // Calculate new position
  let newIndex = (currentIndex + steps) % 12;
  if (newIndex < 0) newIndex += 12;

  // Get new note
  const newRoot = notes[newIndex];

  return newRoot + suffix;
}

/**
 * Transpose lyrics with chords in brackets
 */
export function transposeLyrics(lyrics: string, steps: number): string {
  if (steps === 0) return lyrics;

  // Match chords in square brackets
  return lyrics.replace(/\[([^\]]+)\]/g, (match, chord) => {
    const transposed = transposeChord(chord, steps);
    return `[${transposed}]`;
  });
}

/**
 * Transpose an array of chords
 */
export function transposeChordArray(chords: string[], steps: number): string[] {
  if (steps === 0) return chords;
  return chords.map((chord) => transposeChord(chord, steps));
}

/**
 * Get the transposed key
 */
export function transposeKey(key: string, steps: number): string {
  return transposeChord(key, steps);
}

/**
 * Get scale degrees for a given key (major or minor)
 */
export function getScaleDegrees(key: string, scale: 'major' | 'minor'): string[] {
  const notes = key.includes('b') ? NOTES_FLAT : NOTES;
  const rootIndex = notes.indexOf(key.replace(/[^A-G#b]/g, ''));
  
  if (rootIndex === -1) return [];

  // Intervals: major = whole, whole, half, whole, whole, whole, half
  // minor = whole, half, whole, whole, half, whole, whole
  const intervals = scale === 'major' 
    ? [0, 2, 4, 5, 7, 9, 11] // Major scale
    : [0, 2, 3, 5, 7, 8, 10]; // Natural minor scale

  return intervals.map((interval) => {
    const index = (rootIndex + interval) % 12;
    return notes[index];
  });
}
