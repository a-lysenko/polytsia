import { ApiProperty } from '@nestjs/swagger';

export class Book {
  @ApiProperty({
    example: '1',
    description: 'The id of the Book',
  })
  readonly id: string;

  @ApiProperty({
    example: 'The Call of the Wild',
    description: 'The title of the Book',
  })
  readonly title: string;

  @ApiProperty({
    example: 'Jack London',
    description: 'The author of the Book',
  })
  readonly author: string;
}
