import { Injectable } from '@nestjs/common';
import { DataService } from '../database/data.service';

export class CreateAuthorDto {
    readonly name: string;
    readonly books?: string[];
}
@Injectable()
export class AuthorsService {
  constructor(private dataService: DataService) {}

  getAuthors() {
    return this.dataService.getAuthors();
  }

  getAuthor(id: string) {
    return this.dataService.getAuthor(id);
  }

  createAuthor(author: CreateAuthorDto) {
    return this.dataService.createAuthor(author);
  }
}
