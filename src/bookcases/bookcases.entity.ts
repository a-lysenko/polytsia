import { ApiProperty } from '@nestjs/swagger';

export class Bookcase {
  @ApiProperty({ example: '1', description: 'The id of the Bookcase' })
  id: string;

  @ApiProperty({ example: 'Wood', description: 'The name of the Bookcase' })
  name: string;
  @ApiProperty({
    example: '["id1", "id2"]',
    description: 'List of shelf ids',
    isArray: true
  })
  shelves: string[];
}
