export interface Book {
  title: string;
  author: string;
  rating?: number;
  genre: string;
  isbn?: string;
  cover?: string;
  review?: string;
  currentlyReading?: boolean;
}

export const books: Book[] = [
  {
    title: 'Baltic: The Future of Europe',
    author: 'Oliver Moody',
    genre: 'history',
    isbn: '9781399814300',
    cover: 'https://m.media-amazon.com/images/I/615WWSm9g7L._SL500_.jpg',
    currentlyReading: true,
  },
  {
    title: 'Catastrophe Ethics',
    author: 'Travis Rieder',
    rating: 5,
    genre: 'philosophy',
    isbn: '9780593471975',
    review:
      'I always wondered how to reconcile "living my life" while living a responsible, moral life. Rieder makes a compelling case for rethinking moral intuitions in the face of slow-moving catastrophes — climate change, pandemics, existential risk. The arguments are rigorous but never inaccessible, and he forces you to sit with trade-offs most of us prefer to avoid. Already shifting how I think about responsibility at scale.',
  },
  {
    title: 'What You Are Looking for Is in the Library',
    author: 'Michiko Aoyama',
    genre: 'fiction',
    isbn: '9781529196269',
    cover: 'https://m.media-amazon.com/images/I/81gyzVTA6vL._SL500_.jpg',
  },
  {
    title: 'Four Thousand Weeks',
    author: 'Oliver Burkeman',
    genre: 'philosophy',
    isbn: '9781473545557',
  },
  {
    title: 'Learn Like a Pro',
    author: 'Barbara Oakley & Olav Schewe',
    rating: 4,
    genre: 'self-improvement',
    isbn: '9781250799371',
    review:
      'Oakley and Schewe distill the science of learning into a compact, immediately usable toolkit — spaced repetition, active recall, interleaving, deliberate practice. There are many genuinely good techniques in there that you\'ll want to apply to all of your future learnings.',
  },
  {
    title: 'Borderlines',
    author: 'Lewis Baston',
    rating: 5,
    genre: 'history',
    isbn: '9781399723794',
    cover: 'https://covers.openlibrary.org/b/id/14745246-L.jpg',
    review:
      'As a travel and history freak, I had to read this one. A structured tour of European history told through 29 borders — each a compressed lesson in geopolitics, identity, and the arbitrariness of where nations end. The kind of book that tells you WHY this border looks so weird, and makes you look at a map differently.',
  },
  {
    title: 'Idos de la mente',
    author: 'Luis Humberto Crosthwaite',
    genre: 'classic',
    isbn: '9789682708251',
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    rating: 4,
    genre: 'classic',
    isbn: '9780679734505',
    review:
      'A book I bought on a street market in Colombia. Dostoevsky builds unbearable psychological pressure from the first page — Raskolnikov\'s crime is almost secondary to the collapse that follows it. An interesting read, although a bit difficult for me given the use of archaic Spanish throughout the pages.',
  },
  {
    title: 'Domain-Driven Design with Golang',
    author: 'Matthew Boyle',
    rating: 4,
    genre: 'craft',
    isbn: '9781804613450',
    review:
      "A practical bridge between Evans' dense DDD theory and the pragmatics of writing Go. Boyle picks the patterns that translate well to Go's idioms to explain DDD sensefully. Especially useful if you already know DDD conceptually but want to see it applied in a statically-typed, opinionated language.",
  },
  {
    title: 'Beyond the Wall',
    author: 'Katja Hoyer',
    rating: 5,
    genre: 'history',
    isbn: '9780241553787',
    cover: 'https://m.media-amazon.com/images/I/8182xIP-8dL._SL500_.jpg',
    review:
      'Hoyer tells the story of East Germany not through the lens of the Wall or the Stasi, but through the lives of the people who actually lived there — with ambition, nostalgia, and genuine belonging. It is a corrective to the Western narrative that treats the GDR as pure dystopia and nothing else. Deeply researched and compulsively readable. As a Berlin inhabitant, often going to ex-GDR for weekend trips, this was a very enlightening read.',
  },
  {
    title: 'Vagabonding',
    author: 'Rolf Potts',
    rating: 4,
    genre: 'travel',
    isbn: '9780812992182',
    review:
      'Potts reframes long-term travel not as escapism but as a deliberate, examined way of living — making the case that time is the real currency, not money. Practical and philosophical in equal measure, it dismantles the myth that extended travel is only for the privileged or adventurous. A book that changes how you think about long-term travel.',
  },
  {
    title: 'How Not to Die',
    author: 'Dr. Michael Greger',
    rating: 5,
    genre: 'health',
    isbn: '9781250066114',
    review:
      'This book fundamentally changed how I eat, and has done so ever since I read it. Greger processes a vast body of nutritional research into actionable guidance without losing scientific rigour. Each chapter focuses on a leading cause of death and lays out the dietary evidence for prevention. Densely sourced but written accessibly — a reference book you might actually read cover to cover.',
  },
  {
    title: "Les Nuages noirs s'amoncellent",
    author: 'Ming Chen',
    rating: 5,
    genre: 'history',
    isbn: '9782843042591',
    cover: 'https://m.media-amazon.com/images/I/718L6wu+JBL._SL500_.jpg',
    review:
      "Ming Chen's memoir spans decades of persecution in Maoist China. Born in 1908, he went through the cultural revolution, the Great Leap Forward, and the Chinese Gulag. A devastating testimony of life in China during the 20th century.",
  },
  {
    title: 'Gargantua',
    author: 'François Rabelais',
    rating: 4,
    genre: 'classic',
    isbn: '9780140445503',
    review:
      'Another mandatory read — Gargantua is a giant that was born from their mother\'s ear. The book was used to teach us about humanism, as Rabelais tells how Gargantua is being educated: with a limitless curiosity, without the rigid methods of medieval scholastics of yesteryear.',
  },
  {
    title: 'Bel-Ami',
    author: 'Guy de Maupassant',
    rating: 4,
    genre: 'classic',
    isbn: '9780140443158',
    review:
      "A mandatory highschool read — nonetheless, a great one. Maupassant tells the story of Charles Duroy, an ambitious man that uses his charisma and popularity with women to move his career forward. The reader sees how Charles becomes an influential journalist, with the chaotic Parisian society of the 1880s as a backdrop.",
  }
];
