import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthorsService, CreateAuthorDto } from './authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorsService) { }
  @Get()
  getAuthors() {
    return JSON.stringify(this.authorsService.getAuthors());
  }

  @Get(':id')
  getAuthor(@Param('id') id: string) {
    return JSON.stringify(this.authorsService.getAuthor(id));
  }

  @Post()
  createAuthor(@Body() body: CreateAuthorDto) {
    return this.authorsService.createAuthor(body);
  }
}
