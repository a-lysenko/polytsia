import { Injectable } from '@nestjs/common';
import { DataService } from '../database/data.service';
import { Bookcase } from './bookcases.entity';
import { CreateBookcaseDto } from './bookcases.dto';

@Injectable()
export class BookcasesService {
  constructor(private dataService: DataService) {
  }

  getBookcases(): Bookcase[] {
    return this.dataService.getBookcases();
  }

  getBookcase(id: string): Bookcase | undefined {
    return this.dataService.getBookcase(id);
  }

  createBookcase(bookcase: CreateBookcaseDto) {
    return this.dataService.createBookcase(bookcase);
  }

  updateBookcase(id: string, bookcase: CreateBookcaseDto) {
    return this.dataService.updateBookcase(id, bookcase);
  }

  deleteBookcase(id: string) {
    return this.dataService.deleteBookcase(id);
  }
}
