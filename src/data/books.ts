export interface Book {
  title: string;
  author: string;
  rating: number;
  genre: string;
  isbn?: string;
  cover?: string;
  review: string;
  currentlyReading?: boolean;
}

export const books: Book[] = [
  {
    title: 'Catastrophe Ethics',
    author: 'Travis Rieder',
    rating: 4,
    genre: 'philosophy',
    isbn: '9780593471975',
    review:
      'Rieder makes a compelling case for rethinking moral intuitions in the face of slow-moving catastrophes — climate change, pandemics, existential risk. The arguments are rigorous but never inaccessible, and he forces you to sit with trade-offs most of us prefer to avoid. Already shifting how I think about responsibility at scale.',
    currentlyReading: true,
  },
  {
    title: 'Learn Like a Pro',
    author: 'Barbara Oakley & Olav Schewe',
    rating: 4,
    genre: 'learning',
    isbn: '9781250799371',
    review:
      'Oakley and Schewe distill the science of learning into a compact, immediately usable toolkit — spaced repetition, active recall, interleaving, deliberate practice. It builds on A Mind for Numbers but is more practical and less padded. Short enough to read in an afternoon, useful enough to revisit often.',
  },
  {
    title: 'Borderlines',
    author: 'Lewis Baston',
    rating: 5,
    genre: 'history',
    isbn: '9781399723794',
    cover: 'https://covers.openlibrary.org/b/id/14745246-L.jpg',
    review:
      'An elegantly structured tour of European history told through 29 borders — each a compressed lesson in geopolitics, identity, and the arbitrariness of where nations end. Baston writes with precision and wit, making dense history genuinely enjoyable. The kind of book that makes you look at a map differently.',
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    rating: 5,
    genre: 'classic',
    isbn: '9780679734505',
    review:
      'Dostoevsky builds unbearable psychological pressure from the first page — Raskolnikov\'s crime is almost secondary to the collapse that follows it. The novel is fundamentally about the impossibility of living outside conscience, dressed up as a murder story. One of the few books that genuinely changes how you think about guilt, suffering, and redemption.',
  },
  {
    title: 'Domain-Driven Design with Golang',
    author: 'Matthew Boyle',
    rating: 4,
    genre: 'craft',
    isbn: '9781804613450',
    review:
      "A practical bridge between Evans' dense DDD theory and the pragmatics of writing Go. Boyle picks the patterns that translate well to Go's idioms and leaves the rest aside — a sensible call. Especially useful if you already know DDD conceptually but want to see it applied in a statically-typed, opinionated language.",
  },
  {
    title: 'Vagabonding',
    author: 'Rolf Potts',
    rating: 5,
    genre: 'travel',
    isbn: '9780812992182',
    review:
      'Potts reframes long-term travel not as escapism but as a deliberate, examined way of living — making the case that time is the real currency, not money. Practical and philosophical in equal measure, it dismantles the myth that extended travel is only for the privileged or adventurous. A book that changes how you think about freedom before it changes where you go.',
  },
  {
    title: 'How Not to Die',
    author: 'Dr. Michael Greger',
    rating: 4,
    genre: 'health',
    isbn: '9781250066114',
    review:
      'Greger processes a vast body of nutritional research into actionable guidance without losing scientific rigour. Each chapter focuses on a leading cause of death and lays out the dietary evidence for prevention. Densely sourced but written accessibly — a reference book you might actually read cover to cover.',
  },
  {
    title: "Les Nuages noirs s'amoncellent",
    author: 'Ming Chen',
    rating: 5,
    genre: 'memoir',
    isbn: '9782843042591',
    cover: 'https://m.media-amazon.com/images/I/718L6wu+JBL._SL500_.jpg',
    review:
      "Ming Chen's memoir spans decades of persecution in Maoist China with extraordinary restraint and clarity. Born in 1908, he survived re-education camps, forced labor, and systematic humiliation without losing his voice. One of the most quietly devastating testimonies of the 20th century.",
  },
  {
    title: 'Beyond the Wall',
    author: 'Katja Hoyer',
    rating: 5,
    genre: 'history',
    isbn: '9780241553787',
    cover: 'https://m.media-amazon.com/images/I/8182xIP-8dL._SL500_.jpg',
    review:
      'Hoyer tells the story of East Germany not through the lens of the Wall or the Stasi, but through the lives of the people who actually lived there — with ambition, nostalgia, and genuine belonging. It is a corrective to the Western narrative that treats the GDR as pure dystopia and nothing else. Deeply researched and compulsively readable.',
  },
  {
    title: 'Gargantua',
    author: 'François Rabelais',
    rating: 4,
    genre: 'classic',
    isbn: '9780140445503',
    review:
      'Rabelais at full tilt — grotesque, erudite, and relentlessly funny in a way that somehow survives six centuries. The giants are a vehicle for everything: satire of scholasticism, celebration of bodily life, utopian speculation. Reading it feels less like consuming a classic and more like being shouted at by a brilliant, drunk professor who happened to be right about most things.',
  },
  {
    title: 'Bel-Ami',
    author: 'Guy de Maupassant',
    rating: 4,
    genre: 'classic',
    isbn: '9780140443158',
    review:
      "Maupassant's Georges Duroy is one of literature's great anti-heroes — charming, hollow, ruthlessly effective. The novel is a surgical dissection of ambition and social performance in fin-de-siècle Paris, with journalism as its backdrop. Unsettling in how contemporary it feels.",
  }
];
