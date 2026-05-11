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
    title: 'Domain-Driven Design with Golang',
    author: 'Matthew Boyle',
    rating: 4,
    genre: 'craft',
    isbn: '9781804613450',
    review:
      "A practical bridge between Evans' dense DDD theory and the pragmatics of writing Go. Boyle picks the patterns that translate well to Go's idioms and leaves the rest aside — a sensible call. Especially useful if you already know DDD conceptually but want to see it applied in a statically-typed, opinionated language.",
  },
  {
    title: 'Borderlines',
    author: 'Lewis Baston',
    rating: 5,
    genre: 'history',
    isbn: '9781399723763',
    review:
      'An elegantly structured tour of European history told through 29 borders — each a compressed lesson in geopolitics, identity, and the arbitrariness of where nations end. Baston writes with precision and wit, making dense history genuinely enjoyable. The kind of book that makes you look at a map differently.',
  },
];
