import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import {
  ApiBadRequestResponse, ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation, ApiParam,
  ApiTags
} from '@nestjs/swagger';
import { Bookcase } from './bookcases.entity';
import { BookcasesService } from './bookcases.service';
import { CreateBookcaseDto } from './bookcases.dto';
import { Response } from 'express';

@ApiTags('bookcases')
@Controller('bookcases')
export class BookcasesController {
  constructor(private bookcasesService: BookcasesService) {
  }

  @Get()
  @ApiOperation({
    summary: 'Get all bookcases',
    description: 'Returns an array of bookcases'
  })
  @ApiOkResponse({
    description: 'The bookcases',
    type: Bookcase,
    isArray: true
  })
  getBookcases() {
    return this.bookcasesService.getBookcases();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get bookcase by id',
    description: 'Returns a bookcase'
  })
  @ApiOkResponse({
    description: 'The bookcase',
    type: Bookcase
  })
  @ApiNotFoundResponse({
    description: 'The bookcase was not found'
  })
  getBookcase(
    @Param('id') id: string
  ) {
    const bookcase = this.bookcasesService.getBookcase(id);
    if (!bookcase) {
      throw new HttpException('Bookcase not found', 404)
    }
    return bookcase;
  }

  @Post()
  @ApiOperation({
    summary: 'Create bookcase',
    description: 'Creates a bookcase'
  })
  @ApiCreatedResponse({
    description: 'The bookcase has been successfully created',
    type: Bookcase
  })
  @ApiBadRequestResponse({
    description: 'The bookcase could not be created'
  })
  createBookcase(@Body() body: CreateBookcaseDto) {
    return this.bookcasesService.createBookcase(CreateBookcaseDto);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update bookcase',
    description: 'Updates a bookcase'
  })
  @ApiParam({ name: 'id', description: 'Bookcase id', type: 'string' })
  @ApiBody({
    description: 'Bookcase object',
    type: CreateBookcaseDto
  })
  @ApiOkResponse({
    description: 'The bookcase has been successfully updated',
    type: 'id'
  })
  @ApiCreatedResponse({
    description: 'The bookcase has been successfully created',
    type: 'id'
  })
  @ApiBadRequestResponse({
    description: 'The bookcase could not be updated'
  })
  updateBookcase(
    @Param('id') id: string,
    @Body() body: CreateBookcaseDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const { isNew, id: itemId } = this.bookcasesService.updateBookcase(id, body);
    res.status(
      isNew ? HttpStatus.CREATED : HttpStatus.OK
    );
    res.send({ id: itemId });
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete bookcase',
    description: 'Deletes a bookcase'
  })
  @ApiParam({ name: 'id', description: 'Bookcase id', type: 'string' })
  @ApiOkResponse({
    description: 'The bookcase has been successfully deleted',
    type: 'id'
  })
  deleteBookcase(
    @Param('id') id: string,
  ) {
    this.bookcasesService.deleteBookcase(id);
  }
}
