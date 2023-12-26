import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { AuthorsService, CreateAuthorDto } from './authors.service';
import { Response } from 'express';
import { ApiOkResponse, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('authors')
@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorsService) { }
  @Get()
  @ApiOperation({ summary: 'Find authors' })
  @ApiResponse({ status: HttpStatus.OK, type: 'Author', isArray: true })
  getAuthors() {
    return JSON.stringify(this.authorsService.getAuthors());
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find author (by id)' })
  @ApiParam({name: 'id', description: 'Author id', type: 'string'})
  @ApiOkResponse({ type: 'Author' })
  getAuthor(@Param('id') id: string) {
    return this.authorsService.getAuthor(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create author' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Created successfully', type: 'id' })
  createAuthor(@Body() body: CreateAuthorDto) {
    return this.authorsService.createAuthor(body);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update author' })
  @ApiParam({name: 'id', description: 'Author id', type: 'string'})
  @ApiResponse({ status: HttpStatus.OK, description: 'Created successfully' })
  updateAuthor(
    @Param('id') id: string, @Body() body: CreateAuthorDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const { isNew, id: itemId } = this.authorsService.updateAuthor(id, body);
    // @ts-ignore
    res.status(
      (isNew ? HttpStatus.CREATED : HttpStatus.OK)
    );
    res.send({ id: itemId });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete author' })
  @ApiParam({name: 'id', description: 'Author id', type: 'string'})
  deleteAuthor(
    @Param('id') id: string,
  ) {
    this.authorsService.deleteAuthor(id);
  }
}
