import { Injectable } from '@nestjs/common';
import { DataService } from '../database/data.service';

@Injectable()
export class BooksService {
  constructor(private dataService: DataService) {

  }

  getBooks() {
    return this.dataService.getBooks();
  }

  getBook(id: string) {
    return this.dataService.getBook(id);
  }
}
