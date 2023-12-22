import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookcaseDto {
  @ApiProperty({ example: 'Bookcase 1', description: 'The name of the Bookcase'})
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiPropertyOptional({
    example: '["id1", "id2"]',
    description: 'List of shelf ids',
    isArray: true
  })
  readonly shelves?: string[];
}
