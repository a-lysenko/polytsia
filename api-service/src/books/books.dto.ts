import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
    @ApiProperty({
        example: 'The Call of the Wild',
        description: 'The title of the Book',
    })
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @ApiProperty({
        example: 'Jack London',
        description: 'The author of the Book',
    })
    @IsString()
    @IsNotEmpty()
    readonly author: string;
}
