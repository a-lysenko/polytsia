import { Injectable } from '@nestjs/common';
import { DataService } from '../database/data.service';

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
}
