import { ApiProperty } from "@nestjs/swagger"
import { IsString, MaxLength, MinLength, IsISO8601 } from "class-validator"


export class TodoDto {
    @ApiProperty({ minimum: 4, maximum: 30, description: 'Título da tarefa a ser realizada' })
    @IsString()
    @MinLength(4)
    @MaxLength(30)
    title: string

    @ApiProperty({ minimum: 4, maximum: 150, description: 'Descrição da tarefa a ser realizada' })
    @IsString()
    @MinLength(4)
    @MaxLength(150)
    description: string

    @ApiProperty({ description: 'Data de vencimento da tarefa.' })
    @IsISO8601()
    deadlineDate: Date

    @ApiProperty({description: 'Prioridade pode ser definida como : HIGH, MEDIUM ou LOW.'})
    @IsString()
    @MinLength(3)
    @MaxLength(150)
    priority: string
    
    @ApiProperty({description: 'Status pode ser definida como : OPEN, DOING ou CLOSED.'})
    @IsString()
    @MinLength(4)
    @MaxLength(150)
    status: string
}