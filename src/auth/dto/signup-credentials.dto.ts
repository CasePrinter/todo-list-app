import { ApiProperty } from "@nestjs/swagger"
import { IsString, MinLength, MaxLength, Matches, IsEmail } from "class-validator"

export class SignupCredentialsDto {
    @ApiProperty({ minimum: 4, maximum: 20 })
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string

    @ApiProperty({ minimum: 6, maximum: 20, description: 'Pelo menos 1 maiúsculo, 1 minúsculo, 1 caractere especial e 1 número' })
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(
        /((?=.*\d)|(?=.*\w+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        { message: 'Senha muito fraca'}
    )
    password: string

    @ApiProperty({ description: 'Digite um email válido para cadastro' })
    @IsEmail()
    email: string
}