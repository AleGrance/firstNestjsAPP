import {IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsString, MinLength} from 'class-validator'

export class CreateUser {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    name: string

    @IsNumber()
    @IsNotEmpty()
    phone: number
    
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    pais: string
}