import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DataService } from './database/data.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly dataService: DataService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('init')
  init(): string {
    this.dataService.init();
    return 'OK';
  }

  @Get('authors')
  getAuthors(): string {
    return JSON.stringify(this.dataService.getAuthors());
  }

  @Get('author/:id')
  getAuthor(id: string): string {
    return JSON.stringify(this.dataService.getAuthor(id));
  }
}
