import { Injectable } from '@nestjs/common';
import { DataService } from '../database/data.service';

@Injectable()
export class BooksService {
    constructor(private dataService: DataService) {

    }

    getBooks(): string {
        return JSON.stringify(this.dataService.getBooks());
    }

    getBook(id: string): string {
        return JSON.stringify(this.dataService.getBook(id));
    }
}
