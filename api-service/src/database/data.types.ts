export interface BookModel {
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

export interface AuthorModel {
  id: string;
  name: string;
  books: string[];
}

export interface BookcaseModel {
  id: string;
  name: string;
  shelves: string[];
}

export interface ShelfModel {
  id: string;
  name: string;
  books: string[];
}

export type BookcaseUpdateModel = Omit<BookcaseModel, 'id'>;
export type AuthorUpdateModel = Omit<AuthorModel, 'id'>;
export type BookUpdateModel = Omit<BookModel, 'id'>;
export type ShelfUpdateModel = Omit<ShelfModel, 'id'>;
// type UpdateModel = BookcaseUpdateModel | AuthorUpdateModel | BookUpdateModel | ShelfUpdateModel;
