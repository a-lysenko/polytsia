import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DataService } from './data.service';

@Module({
  providers: [DatabaseService, DataService],
  exports: [DataService],
})
export class DatabaseModule {}
