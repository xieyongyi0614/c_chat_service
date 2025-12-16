import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @Transform(({ value }) => {
        if (value === undefined || value === null || value === '') {
            return 1;
        }
        return Number(value);
    })
    @IsNumber({}, { message: 'role must be a number' })
    @IsOptional()
    role?: number;
}

export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

export class AuthResponseDto {
    access_token: string;
    user: {
        id: string;
        email: string;
        username: string;
        role: number;
    };
}
