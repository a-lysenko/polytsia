import { Module } from '@nestjs/common';
import { BookcasesController } from './bookcases.controller';
import { BookcasesService } from './bookcases.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BookcasesController],
  providers: [BookcasesService]
})
export class BookcasesModule {}
