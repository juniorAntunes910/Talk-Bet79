import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username!: string; 

    @IsEmail()
    email!: string;

    @IsString()
    @MinLength(6)
    password!: string;
}

/*
    Basicamente isso é tipo o zod so que do nest 
    O ponto de exclamação é pq a gente nao sabe se 
    ela existe ou não
*/
