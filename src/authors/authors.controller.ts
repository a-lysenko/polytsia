import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { AuthorsService, CreateAuthorDto } from './authors.service';
import { Response } from 'express';

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

  @Put(':id')
  updateAuthor(
    @Param('id') id: string, @Body() body: CreateAuthorDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const isNew = this.authorsService.updateAuthor(id, body);
    // @ts-ignore
    res.status(
      (isNew ? HttpStatus.CREATED : HttpStatus.OK) as number
    );
  }

  @Delete(':id')
  deleteAuthor(
    @Param('id') id: string,
  ) {
    this.authorsService.deleteAuthor(id);
  }
}
