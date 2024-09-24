import { ApiProperty } from "@nestjs/swagger"
import { IsString, MaxLength, MinLength} from "class-validator"
 

export class ListDto {
    @ApiProperty({ minimum: 4, maximum: 30, description: 'Título da Lista a ser realizada' })
    @IsString()
    @MinLength(4)
    @MaxLength(30)
    title: string

    @ApiProperty({ minimum: 4, maximum: 150, description: 'Descrição da Lista a ser realizada' })
    @IsString()
    @MinLength(4)
    @MaxLength(150)
    description: string

    @ApiProperty({description: 'Status pode ser definida como : WAITING, DOING ou CLOSED.'})
    @IsString()
    @MinLength(4)
    @MaxLength(150)
    status: string
}