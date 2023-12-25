import { Injectable } from '@nestjs/common';
import { DataService } from '../database/data.service';
import { CreateBookDto } from './books.dto';

@Injectable()
export class BooksService {
  constructor(private dataService: DataService) {

  }

  getBooks() {
    return this.dataService.getAllCRUD('books');
  }

  getBook(id: string) {
    return this.dataService.getCRUD('books', id);
  }

  createBook(book: CreateBookDto) {
    return this.dataService.createCRUD('books', book);
  }

  updateBook(id: string, book: CreateBookDto) {
    return this.dataService.updateCRUD('books', id, book);
  }

  deleteBook(id: string) {
    return this.dataService.deleteCRUD('books', id);
  }
}
