export interface Book {
  id: string
  title: string;
  author: string;
  authorId?: string;
  publisher?: string;
  publisherId?: string;
  isbn?: string;
  isbn13?: string;
  pages?: number;
  year?: number;
  rating?: number;
  desc?: string;
  tags?: string[];
}

export interface Author {
  id: string;
  name: string;
  books?: string[];
}

export interface Bookcase {
  id: string;
  name: string;
  shelves?: string[];
}

export interface Shelf {
  id: string;
  name: string;
  books?: string[];
}
