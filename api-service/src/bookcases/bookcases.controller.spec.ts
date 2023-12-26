import { Test, TestingModule } from '@nestjs/testing';
import { BookcasesController } from './bookcases.controller';

describe('BookcasesController', () => {
  let controller: BookcasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookcasesController],
    }).compile();

    controller = module.get<BookcasesController>(BookcasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
