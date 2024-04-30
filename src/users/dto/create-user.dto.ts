import {IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsString, MinLength} from 'class-validator'

export class CreateUser {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    name: string

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    email: string
    
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    password: string
}