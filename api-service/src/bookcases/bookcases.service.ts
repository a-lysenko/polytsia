import { Injectable } from '@nestjs/common';
import { DataService } from '../database/data.service';
import { Bookcase } from './bookcases.entity';
import { CreateBookcaseDto } from './bookcases.dto';

@Injectable()
export class BookcasesService {
  constructor(private dataService: DataService) {
  }

  getBookcases(): Bookcase[] {
    return this.dataService.getAllCRUD('bookcases');
  }

  getBookcase(id: string): Bookcase | undefined {
    return this.dataService.getCRUD('bookcases', id);
  }

  createBookcase(bookcase: CreateBookcaseDto) {
    return this.dataService.createCRUD(
      'bookcases',
      {...bookcase, shelves: bookcase.shelves ?? []}
    );
  }

  updateBookcase(id: string, bookcase: CreateBookcaseDto) {
    return this.dataService.updateCRUD(
      'bookcases',
      id,
      {...bookcase, shelves: bookcase.shelves ?? []}
    );
  }

  deleteBookcase(id: string) {
    return this.dataService.deleteCRUD('bookcases', id);
  }
}
