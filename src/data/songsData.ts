export interface Song {
  id: string;
  title: string;
  artist: string;
  language: string;
  instrument: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  capo?: string;
  key: string;
  tempo?: string;
  lyrics: string;
  popular?: boolean;
  recentlyAdded?: boolean;
  chords?: string[];
}

export const songsData: Song[] = [
  {
    id: 'tum-hi-ho',
    title: 'Tum Hi Ho',
    artist: 'Arijit Singh',
    language: 'Hindi',
    instrument: 'Guitar',
    difficulty: 'Beginner',
    capo: 'Capo 4',
    key: 'Am',
    tempo: '75 BPM',
    popular: true,
    chords: ['Am', 'F', 'C', 'G'],
    lyrics: `[Am]Haan tum [F]hi ho
[C]Tum hi [G]ho
[Am]Zindagi ab [F]tum hi [C]cho [G]

[Am]Chain bhi [F]mera dard [C]bhi [G]
[Am]Meri aash[F]iqui ab [C]tum hi [G]ho

[Am]Tere liye [F]har roz [C]hain jeete [G]
[Am]Kaise main [F]tumhe bata[C]oon[G]
[Am]Baahon mein [F]meri aa [C]ke toh aa[G]ja
[Am]Meri [F]jaan [C]meri [G]jaan

[Am]Haan tum [F]hi ho
[C]Tum hi [G]ho
[Am]Zindagi ab [F]tum hi [C]cho [G]

[Am]Teri ban[F]dahiyan hain [C]yun te[G]ri
[Am]Meri man[F]naiyaan [C]bhi yun [G]teri
[Am]Teri jan[F]natein [C]meri jan[G]natein
[Am]Teri jan[F]natein [C]meri jan[G]natein

[Am]Kaise main [F]tujhko [C]samjhaoon [G]
[Am]Tere bin [F]ab na [C]lenge [G]dum
[Am]Ik pal [F]bhi, tujhe [C]bhoole na [G]hoon
[Am]Meri [F]jaan [C]meri [G]jaan

[Am]Haan tum [F]hi ho
[C]Tum hi [G]ho
[Am]Zindagi ab [F]tum hi [C]cho`,
  },
  {
    id: 'perfect',
    title: 'Perfect',
    artist: 'Ed Sheeran',
    language: 'English',
    instrument: 'Guitar',
    difficulty: 'Intermediate',
    key: 'Ab',
    tempo: '95 BPM',
    popular: true,
    chords: ['Ab', 'Fm', 'Db', 'Eb', 'E7'],
    lyrics: `[Ab]I found a [Fm]love for [Db]me
[Ab]Darling, just [Fm]dive right [Db]in and follow my [Ab]lead
Well, I found a [Fm]girl, beauti[Db]ful and [Ab]sweet
Oh, I never [Fm]knew you were the someone [Db]waiting for me

'Cause we were just kids when we [Ab]fell in love
Not knowing [Fm]what it [Db]was
I will not [Ab]give you up [Fm]this [Db]time
But darling, just [Ab]kiss me slow, your heart is [Fm]all I [Db]own
And in your [Ab]eyes you're [Fm]holding [Eb]mine

[Fm]Baby, [Db]I'm [Ab]dancing in the [Eb]dark
With [Fm]you between my [Db]arms[Ab]
[Eb]Barefoot on the [Fm]grass[Db]
[Ab]Listening to our [Eb]favorite song
When you [Fm]said you looked a [Db]mess
I whispered [Ab]underneath my [Eb]breath
But you [Fm]heard it, [Db]darling [Ab]you look [Eb]perfect to[Ab]night

[Ab]Well I found a [Fm]woman, [Db]stronger than anyone I [Ab]know
She shares my [Fm]dreams, I hope that [Db]someday I'll share her [Ab]home
I found a [Fm]love, to [Db]carry more than just my [Ab]secrets
To carry [Fm]love, to carry [Db]children of our [Eb]own

We are still kids, but we're [Ab]so in love
Fighting a[Fm]gainst all [Db]odds
I know we'll [Ab]be alright [Fm]this [Db]time
Darling, just [Ab]hold my hand
Be my [Fm]girl, I'll [Db]be your man
I see my [Ab]future [Fm]in your [Eb]eyes

[Fm]Baby, [Db]I'm [Ab]dancing in the [Eb]dark
With [Fm]you between my [Db]arms[Ab]
[Eb]Barefoot on the [Fm]grass[Db]
[Ab]Listening to our [Eb]favorite song
When I [Fm]saw you in that [Db]dress
Looking [Ab]so beauti[Eb]ful
I don't de[Fm]serve this, [Db]darling [Ab]you look [Eb]perfect to[Ab]night`,
  },
  {
    id: 'bella-ciao',
    title: 'Bella Ciao',
    artist: 'Traditional Italian',
    language: 'Italian',
    instrument: 'Guitar',
    difficulty: 'Beginner',
    key: 'Em',
    popular: true,
    recentlyAdded: true,
    chords: ['Em', 'B7', 'Am'],
    lyrics: `[Em]Una mattina [B7]mi son alzato
O bella [Em]ciao, bella ciao, bella ciao, ciao, [B7]ciao
Una mattina [Em]mi son alzato
E ho tro[Am]vato l'inva[B7]sor[Em]

[Em]O partigiano [B7]portami via
O bella [Em]ciao, bella ciao, bella ciao, ciao, [B7]ciao
O partigiano [Em]portami via
Che mi [Am]sento di [B7]morir[Em]

[Em]E se io muoio [B7]da partigiano
O bella [Em]ciao, bella ciao, bella ciao, ciao, [B7]ciao
E se io muoio [Em]da partigiano
Tu mi [Am]devi seppel[B7]lir[Em]

[Em]Seppellire [B7]lassù in montagna
O bella [Em]ciao, bella ciao, bella ciao, ciao, [B7]ciao
Seppellire [Em]lassù in montagna
Sotto [Am]l'ombra di un [B7]bel [Em]fior

[Em]E le genti che [B7]passeranno
O bella [Em]ciao, bella ciao, bella ciao, ciao, [B7]ciao
E le genti che [Em]passeranno
Mi di[Am]ranno che bel [B7]fior[Em]

[Em]Questo è il fiore [B7]del partigiano
O bella [Em]ciao, bella ciao, bella ciao, ciao, [B7]ciao
Questo è il fiore [Em]del partigiano
Morto [Am]per la liber[B7]tà[Em]`,
  },
  {
    id: 'kal-ho-naa-ho',
    title: 'Kal Ho Naa Ho',
    artist: 'Sonu Nigam',
    language: 'Hindi',
    instrument: 'Piano',
    difficulty: 'Intermediate',
    capo: 'No Capo',
    key: 'D',
    tempo: '80 BPM',
    popular: true,
    lyrics: `[D]Har ghadi badal [Bm]rahi hai roop [G]zindagi
[A]Chhaon hai kabhi kabhi hai [D]dhoop zindagi

[D]Har pal yahan [Bm]jee bhar jiyo
[G]Jo hai samaa [A]kal ho naa ho

[D]Kal ho naa [A]ho
[Bm]Kal ho naa [F#m]ho
[G]Kal ho naa [A]ho

[D]Dekho dekho [A]aaj ko
[Bm]Khile hai kyun [F#m]har taraf
[G]Dekho na [A]pal ye tha[D]mta nahi

[D]Yeh doori [Bm]saari mita de
[G]Khushiyon ki [A]baahein baandh le
[D]Tu gham ki [Bm]chaadar utha de
[G]Haseen jahaan [A]dekh le

[D]Dekho dekho [A]aaj ko
[Bm]Khile hai kyun [F#m]har taraf
[G]Dekho na [A]pal ye tha[D]mta nahi

[D]Jo anjaana tha [Bm]woh haseen sitara
[G]Tu hai mera [A]aaja paas mere
[D]Main hoon yahaan [Bm]tu hai yahaan
[G]Meri bahon mein [A]aa bhi ja

[D]Kal ho naa [A]ho
[Bm]Kal ho naa [F#m]ho
[G]Kal ho naa [A]ho[D]`,
  },
  {
    id: 'imagine',
    title: 'Imagine',
    artist: 'John Lennon',
    language: 'English',
    instrument: 'Piano',
    difficulty: 'Beginner',
    key: 'C',
    tempo: '76 BPM',
    popular: true,
    lyrics: `[C]Imagine there's no [Cmaj7]heaven [F]
It's [C]easy if you [Cmaj7]try [F]
[C]No hell be[Cmaj7]low us [F]
A[C]bove us only [Cmaj7]sky [F]

[F]Imagine [Am]all the [Dm]people [F]
[G]Living for to[C]day [G7]ahh

[C]Imagine there's no [Cmaj7]countries [F]
It [C]isn't hard to [Cmaj7]do [F]
[C]Nothing to kill or [Cmaj7]die for [F]
And [C]no religion [Cmaj7]too [F]

[F]Imagine [Am]all the [Dm]people [F]
[G]Living life in [C]peace [G7]yoo hoo

[F]You may [G]say I'm a [C]dreamer [E7]
[F]But I'm [G]not the only [C]one [E7]
[F]I hope some[G]day you'll [C]join us [E7]
[F]And the [G]world will [C]be as one

[C]Imagine no po[Cmaj7]ssessions [F]
I [C]wonder if you [Cmaj7]can [F]
[C]No need for greed or [Cmaj7]hunger [F]
A [C]brotherhood of [Cmaj7]man [F]

[F]Imagine [Am]all the [Dm]people [F]
[G]Sharing all the [C]world [G7]yoo hoo

[F]You may [G]say I'm a [C]dreamer [E7]
[F]But I'm [G]not the only [C]one [E7]
[F]I hope some[G]day you'll [C]join us [E7]
[F]And the [G]world will [C]live as one`,
  },
  {
    id: 'ae-watan',
    title: 'Ae Watan',
    artist: 'Arijit Singh',
    language: 'Hindi',
    instrument: 'Guitar',
    difficulty: 'Advanced',
    capo: 'Capo 3',
    key: 'Dm',
    tempo: '72 BPM',
    recentlyAdded: true,
    lyrics: `[Dm]Mitti ki bhi [Am]pehchaan hai tu
[C]Aabru ka [G]samman hai tu
[Dm]Jaan ho toh [Am]jahaan hai tu
[C]Ae mere wa[G]tan[Dm]

[Dm]Tere daman se [Am]ek dhaga
[C]Baandh liya [G]maine maulaa
[Dm]Tu badi [Am]meherbaaniyaan
[C]Rab bhi [G]juda na kar [Dm]paaye

[Dm]Khushiyon ki [Am]baarish mein
[C]Gham ki paunn [G]boyi maine
[Dm]Jab talak [Am]zinda hoon
[C]Tere geet ga[G]yenge [Dm]hum

[Dm]Mitti ki bhi [Am]pehchaan hai tu
[C]Aabru ka [G]samman hai tu
[Dm]Jaan ho toh [Am]jahaan hai tu
[C]Ae mere wa[G]tan[Dm]

[Dm]Tere chaman mein [Am]khilta rahoon
[C]Phoolon se main [G]milta rahoon
[Dm]Tere geet [Am]gaata rahoon
[C]Ae watan [G]ae wa[Dm]tan

[Dm]Bulbul bhi [Am]hoon main
[C]Teri khush[G]bu se [Dm]pyaar
[Dm]Saaya bhi hoon [Am]tera
[C]Rakhta hoon [G]karaar[Dm]`,
  },
  {
    id: 'hallelujah',
    title: 'Hallelujah',
    artist: 'Leonard Cohen',
    language: 'English',
    instrument: 'Guitar',
    difficulty: 'Intermediate',
    key: 'C',
    tempo: '65 BPM',
    popular: true,
    lyrics: `[C]Now I've [Am]heard there was a [C]secret chord
That [Am]David played, and it [C]pleased the Lord
But [F]you don't really [G]care for music, [C]do you?[G]

It [C]goes like this the [F]fourth, the [G]fifth
The [Am]minor fall, the [F]major lift
The [G]baffled king com[E7]posing Halle[Am]lujah

Halle[F]lujah, Halle[Am]lujah
Halle[F]lujah, Halle[C]lu[G]jah[C][G]

Your [C]faith was strong but you [Am]needed proof
You [C]saw her bathing [Am]on the roof
Her [F]beauty and the [G]moonlight over[C]threw you[G]

She [C]tied you to a [F]kitchen [G]chair
She [Am]broke your throne, and she [F]cut your hair
And [G]from your lips she [E7]drew the Halle[Am]lujah

Halle[F]lujah, Halle[Am]lujah
Halle[F]lujah, Halle[C]lu[G]jah[C][G]

[C]Maybe I have [Am]been here before
I [C]know this room, I've [Am]walked this floor
I [F]used to live a[G]lone before I [C]knew you[G]

I've [C]seen your flag on the [F]marble [G]arch
[Am]Love is not a [F]victory march
It's a [G]cold and it's a [E7]broken Halle[Am]lujah

Halle[F]lujah, Halle[Am]lujah
Halle[F]lujah, Halle[C]lu[G]jah[C]`,
  },
  {
    id: 'kun-faya-kun',
    title: 'Kun Faya Kun',
    artist: 'A.R. Rahman',
    language: 'Hindi',
    instrument: 'Guitar',
    difficulty: 'Intermediate',
    capo: 'Capo 2',
    key: 'Am',
    tempo: '68 BPM',
    recentlyAdded: true,
    lyrics: `[Am]Kun faya kun
Kun faya kun
Kun faya [G]kun
Kun faya [Am]kun

[Am]Teri nazar [F]jab se mili
[C]Rooh mein [G]hulchul machi
[Am]Teri nazar [F]jab se mili
[C]Rooh mein [G]hulchul ma[Am]chi

[Am]Kun faya kun [F]ho ja teri [C]ek nazar [G]ki baat
Kun faya [Am]kun
Kun faya kun
Kun faya [G]kun
Kun faya [Am]kun

[Am]Pehle bhi [F]main, ab bhi [C]hoon
Aage bhi [G]main hoo[Am]nga
[Am]Raaz-e-ulfat [F]tum se hain
[C]Jaanti hai [G]yeh za[Am]meen

[Am]Tere dar ki [F]rahguzar
[C]Woh ja[G]nat jo [Am]maangi
[Am]Jaam-e-shauq [F]pee liya
[C]Saaki ne la[G]gaayi [Am]baazi

Kun faya kun
Kun faya kun
Kun faya [G]kun
Kun faya [Am]kun`,
  },
  {
    id: 'somewhere-over-the-rainbow',
    title: 'Somewhere Over the Rainbow',
    artist: 'Israel Kamakawiwoʻole',
    language: 'English',
    instrument: 'Ukulele',
    difficulty: 'Beginner',
    key: 'C',
    popular: true,
    lyrics: `[C]Ooh, [Em]ooh
[F]Ooh, [C]ooh
[F]Ooh, [E7]ooh, [Am]ooh[F]

[C]Somewhere [Em]over the rainbow
[F]Way up [C]high
[F]And the [C]dreams that you dream of
[G]Once in a lulla[Am]by [F]

[C]Somewhere [Em]over the rainbow
[F]Blue birds [C]fly
[F]And the [C]dreams that you dream of
[G]Dreams really do come [Am]true [F]ooh

Some[C]day I'll wish upon a star
[G]Wake up where the clouds are far be[Am]hind [F]me
Where [C]trouble melts like lemon drops
[G]High above the chimney tops
That's [Am]where you'll [F]find me

[C]Somewhere [Em]over the rainbow
[F]Blue birds [C]fly
[F]And the [C]dream that you dare to
Oh [G]why, oh why can't [Am]I [F]

Some[C]day I'll wish upon a star
[G]Wake up where the clouds are far be[Am]hind [F]me
Where [C]trouble melts like lemon drops
[G]High above the chimney tops
That's [Am]where you'll [F]find me

[C]Somewhere [Em]over the rainbow
[F]Way up [C]high
[F]And the [C]dreams that you dare to
[G]Why oh why can't [Am]I [F]

[C]Ooh, [Em]ooh
[F]Ooh, [C]ooh
[F]Ooh, [E7]ooh, [Am]ooh[F]`,
  },
  {
    id: 'raabta',
    title: 'Raabta',
    artist: 'Arijit Singh',
    language: 'Hindi',
    instrument: 'Guitar',
    difficulty: 'Advanced',
    capo: 'Capo 1',
    key: 'Em',
    tempo: '85 BPM',
    recentlyAdded: true,
    lyrics: `[Em]Kehna galat galat [C]laage
[G]Kehna sahi sahi [D]laage
[Em]Kuch bhi kehna be[C]kaar hai
[G]Tera mera rish[D]ta hai kaisa

[Em]Ik pal mein do[C]ori
[G]Ik pal mein saa[D]thi
[Em]Bairee bhi ho [C]jaayen
[G]Pal do pal [D]mein

[Em]Sach kahoon [C]sun raabta
[G]Tha shayad [D]yeh tumse peh[Em]le se
[Em]Meri har saans [C]mein
[G]Dhadkan mein roo[D]h mein mahsoos [Em]hai

[Em]Raabta kehlaaye [C]jo bhi
[G]Rishta woh keh[D]laaye jo bhi
[Em]Tumse naata hai [C]mera
[G]Pal do pal ka [D]jaana hai

[Em]Kaagaz ki naavin [C]ko
[G]Dariya mein chod [D]do
[Em]Koi naav yeh [C]khud hi
[G]Dhoondhti kinaara [D]hai

[Em]Sach kahoon [C]sun raabta
[G]Tha shayad [D]yeh tumse peh[Em]le se
[Em]Meri har saans [C]mein
[G]Dhadkan mein roo[D]h mein mahsoos [Em]hai`,
  },
];