import { Injectable } from '@nestjs/common';
import { DataService } from '../database/data.service';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAuthorDto {

  @ApiProperty({ example: 'Jack London', description: 'The name of the Author' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiPropertyOptional({
    example: '["id1", "id2"]',
    description: 'List of book ids',
    isArray: true
  })
  @IsArray()
  @IsOptional()
  readonly books?: string[];
}
@Injectable()
export class AuthorsService {
  constructor(private dataService: DataService) {}

  getAuthors() {
    return this.dataService.getAllCRUD('authors');
  }

  getAuthor(id: string) {
    return this.dataService.getCRUD('authors', id);
  }

  createAuthor(author: CreateAuthorDto) {
    return this.dataService.createCRUD(
      'authors',
      {
        ...author,
        books: author.books ?? []}
    );
  }

  updateAuthor(id: string, author: CreateAuthorDto) {
    return this.dataService.updateCRUD(
      'authors',
      id,
      { ...author,  books: author.books ?? [] }
    )
  }

  deleteAuthor(id: string) {
    return this.dataService.deleteCRUD('authors', id);
  }
}
