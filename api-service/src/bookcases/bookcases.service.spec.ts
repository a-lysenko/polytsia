import { Test, TestingModule } from '@nestjs/testing';
import { BookcasesService } from './bookcases.service';

describe('BookcasesService', () => {
  let service: BookcasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookcasesService],
    }).compile();

    service = module.get<BookcasesService>(BookcasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
