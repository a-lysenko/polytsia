import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { BooksService } from './books.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags
} from '@nestjs/swagger';
import { Book } from './books.entity';
import { CreateBookDto } from './books.dto';
import { Response } from 'express';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {
  }

  @Get()
  @ApiOperation({
    summary: 'Get all books',
    description: 'Returns an array of books'
  })
  @ApiOkResponse({
    description: 'The books',
    type: Book,
    isArray: true
  })
  getBooks() {
    return this.booksService.getBooks();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get book by id',
    description: 'Returns a book'
  })
  @ApiParam({ name: 'id', description: 'Book id', type: 'string' })
  @ApiOkResponse({
    description: 'The book',
    type: Book
  })
  @ApiNotFoundResponse({
    description: 'The book was not found'
  })
  getBook(@Param('id') id: string) {
    const book = this.booksService.getBook(id);
    if (!book) {
      throw new HttpException('The book was not found', 404)
    }
    return book;
  }

  @Post()
  @ApiOperation({
    summary: 'Create book',
    description: 'Creates a book'
  })
  @ApiCreatedResponse({
    description: 'The book has been successfully created',
    type: Book
  })
  @ApiBadRequestResponse({
    description: 'The book could not be created'
  })
  createBook(@Body() body: CreateBookDto) {
    return this.booksService.createBook(body);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update book',
    description: 'Updates a book'
  })
  @ApiParam({ name: 'id', description: 'Book id', type: 'string' })
  @ApiCreatedResponse({
    description: 'The book has been successfully updated',
    type: 'id'
  })
  @ApiCreatedResponse({
    description: 'The book has been successfully created',
    type: 'id'
  })
  @ApiBadRequestResponse({
    description: 'The book could not be updated'
  })
  updateBook(
    @Param('id') id: string,
    @Body() body: CreateBookDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const { isNew, id: itemId } = this.booksService.updateBook(id, body);
    res.status(
      (isNew ? HttpStatus.CREATED : HttpStatus.OK)
    );
    res.send({ id: itemId });
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete book',
    description: 'Deletes a book'
  })
  @ApiParam({ name: 'id', description: 'Book id', type: 'string' })
  @ApiOkResponse({
    description: 'The book has been successfully deleted',
    type: 'id'
  })
  deleteBook(
    @Param('id') id: string,
  ) {
    this.booksService.deleteBook(id);
  }
}
