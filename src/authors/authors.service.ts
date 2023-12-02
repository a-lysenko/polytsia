import { Injectable } from '@nestjs/common';
import { DataService } from '../database/data.service';

@Injectable()
export class AuthorsService {
  constructor(private dataService: DataService) {}

  getAuthors() {
    return this.dataService.getAuthors();
  }

  getAuthor(id: string) {
    return this.dataService.getAuthor(id);
  }
}
