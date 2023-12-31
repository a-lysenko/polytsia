import { Injectable } from '@nestjs/common';
import {
  AuthorModel,
  BookModel,
  BookcaseModel,
  ShelfModel,
  AuthorUpdateModel,
  BookUpdateModel,
  ShelfUpdateModel, BookcaseUpdateModel
} from './data.types';
import { randomUUID } from 'node:crypto';

export interface Data {
  books: BookModel[];
  authors: AuthorModel[];
  bookcases: BookcaseModel[];
  shelves: ShelfModel[];
}

type UpdateModelMap = {
  books: BookUpdateModel;
  authors: AuthorUpdateModel;
  bookcases: BookcaseUpdateModel;
  shelves: ShelfUpdateModel;
}

// type UpdateModels =
//   | { books: BookUpdateModel; }
//   | { authors: AuthorUpdateModel; }
//   | { bookcases: BookcaseUpdateModel; }
//   | { shelves: ShelfUpdateModel; };

@Injectable()
export class DataService {
  #data: Data = {
    books: [],
    authors: [],
    bookcases: [],
    shelves: []
  };

  init() {
    this.#data = {
      books: [
        {
          id: '1',
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          authorId: '1',
          publisher: 'Houghton Mifflin',
          publisherId: '1',
          isbn: '0618260307',
          isbn13: '9780618260300',
          pages: 320,
          year: 1937,
          rating: 4.25,
          desc: 'Bilbo Baggins, a respectable, well-to-do hobbit, lives comfortably in his hobbit-hole until the day the wandering wizard Gandalf chooses him to take part in an adventure from which he may never return.',
        },
        {
          id: '2',
          title: 'The Fellowship of the Ring',
          author: 'J.R.R. Tolkien',
          authorId: '1',
          publisher: 'Houghton Mifflin',
          publisherId: '1',
          isbn: '0618346252',
          isbn13: '9780618346257',
          pages: 398,
          year: 1954,
          rating: 4.35,
          desc: 'Frodo Baggins knew the Ringwraiths were searching for him--and the Ring of Power he bore that would enable Sauron to destroy all that was good in Middle-earth. Now it was up to Frodo and his faithful servant Sam to carry the Ring to where it could be detroyed--in the very center of Sauron\'s dark kingdom.',
        },
        {
          id: '3',
          title: 'The Two Towers',
          author: 'J.R.R. Tolkien',
          authorId: '1',
          publisher: 'Houghton Mifflin',
          publisherId: '1',
          isbn: '0618346260',
          isbn13: '9780618346264',
          pages: 327,
          year: 1954,
          rating: 4.26,
          desc: 'Frodo and his Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in a battle in the Mines of Moria. And Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape, the rest of the company was attacked by Orcs. Now they continue the journey alone down the great River Anduin--alone, that is, save for the mysterious creeping figure that follows wherever they go.',
        },
        {
          id: '4',
          title: 'The Return of the King',
          author: 'J.R.R. Tolkien',
          authorId: '1',
          publisher: 'Houghton Mifflin',
          publisherId: '1',
          isbn: '0618346279',
          isbn13: '9780618346271',
          pages: 416,
          year: 1955,
          rating: 4.52,
          desc: 'The Companions of the Ring have become involved in separate adventures as the quest continues. Aragorn, revealed as the hidden heir of the ancient Kings of the West, joined with the Riders of Rohan against the forces of Isengard, and took part in the desperate victory of the Hornburg. Merry and Pippin, captured by Orcs, escaped into Fangorn Forest and there encountered the Ents. Gandalf returned, miraculously, and defeated the evil wizard, Saruman. Meanwhile, Sam and Frodo progressed toward Mordor to destroy the Ring, accompanied by Smeagol--Gollum, still obsessed by his "preciouss." After a battle with the giant spider, Shelob, Sam left his master for dead; but Frodo is still alive--in the hands of the Orcs. And all the time the armies of the Dark Lord are massing.',
        },
        {
          id: '5',
          title: 'The Silmarillion',
          author: 'J.R.R. Tolkien',
          authorId: '1',
          publisher: 'Houghton Mifflin',
          publisherId: '1',
          isbn: '0618391118',
          isbn13: '9780618391110',
          pages: 386,
          year: 1977,
          rating: 3.92,
          desc: 'The story of the creation of the world and of the First Age, this is the ancient drama to which the characters in The Lord of the Rings look back and in whose events some of them, such as Elrond and Galadriel, took part. The three Silmarils were jewels created by Feanor, most gifted of the Elves. Within them was imprisoned the Light of the Two Trees of Valinor before the Trees themselves were destroyed by Morgoth, the first Dark Lord. Thereafter, the unsullied Light of Valinor lived on only in the Silmarils, but they were seized by Morgoth and set in his crown, which was guarded in the impenetrable fortress of Angband in the north of Middle-earth. The Silmarillion is the history of the rebellion of Feanor and his kindred against the gods, their exile from Valinor and return to Middle-earth, and their war, hopeless despite all their heroism, against the great Enemy.',
        }
      ],
      authors: [
        {
          id: '1',
          name: 'J.R.R. Tolkien',
          books: ['1', '2', '3', '4', '5'],
        }
      ],
      bookcases: [
        {
          id: '1',
          name: 'Bookcase 1',
          shelves: ['1', '2', '3'],
        }
      ],
      shelves: [
        {
          id: '1',
          name: 'Shelf 1',
          books: ['1', '2', '3'],
        },
        {
          id: '2',
          name: 'Shelf 2',
          books: [],
        },
        {
          id: '3',
          name: 'Shelf 3',
          books: ['4', '5'],
        },
      ]
    }
    return this.#data;
  }

  getAllCRUD<T extends keyof Data>(collection: T) {
    return this.#data[collection];
  }

  getCRUD<T extends keyof Data>(collection: T, id: string): Data[T][number] | undefined {
    return this.#data[collection].find(item => item.id === id);
  }

  deleteCRUD<T extends keyof Data>(collection: T, id: string) {
    const index = this.#data[collection].findIndex(item => item.id === id);
    const wasFound = index !== -1
    if (wasFound) {
      this.#data[collection].splice(index, 1);
    }
    return wasFound;
  }

  createCRUD<T extends keyof Data>(
    collection: T,
    item: UpdateModelMap[T],
  ) {
    const id = randomUUID();
    this.#data[collection].push(
      // @ts-ignore
      {
        ...item,
        id,
      }
    );
    return id;
  }

  updateCRUD<T extends keyof Data>(
    collection: T,
    id: string,
    item: UpdateModelMap[T],
  ) {
    const index = this.#data[collection].findIndex(item => item.id === id);
    const isNew = index === -1;

    const updatedItemId = isNew ? randomUUID() : id;
    const updatedItem = {
      id: updatedItemId,
      ...item,
    };
    if (isNew) {
      // @ts-ignore
      this.#data[collection].push(updatedItem);
    } else {
      this.#data[collection][index] = updatedItem;
    }
    return { isNew, id: updatedItemId };
  }
}
