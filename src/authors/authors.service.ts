import { Injectable } from '@nestjs/common';
import { DataService } from '../database/data.service';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiPropertyOptional } from '@nestjs/swagger/dist/decorators/api-property.decorator';

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
    return this.dataService.getAuthors();
  }

  getAuthor(id: string) {
    return this.dataService.getAuthor(id);
  }

  createAuthor(author: CreateAuthorDto) {
    return this.dataService.createAuthor(author);
  }

  updateAuthor(id: string, author: CreateAuthorDto) {
    return this.dataService.updateAuthor(id, author);
  }

  deleteAuthor(id: string) {
    return this.dataService.deleteAuthor(id);
  }
}
