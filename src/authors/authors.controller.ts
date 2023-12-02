import { Controller, Get, Param } from '@nestjs/common';
import { AuthorsService } from './authors.service';

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
}
