import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
    MaxLength,
} from "class-validator";

export class RegisterDto {
    @IsNotEmpty({ message: "Nama Harus Diisi" })
    @IsString({ message: "Nama harus berupa teks" })
    readonly nama: string;

    @IsNotEmpty({ message: "Email Harus Diisi" })
    @IsEmail({}, { message: "Format Email Tidak Valid" })
    readonly email: string;

    @IsNotEmpty({ message: "Password Harus Diisi" })
    @IsString({ message: "Password harus berupa teks" })
    @MinLength(8, { message: "Password minimal 8 karakter" })
    @MaxLength(20, { message: "Password maksimal 20 karakter" })
    readonly password: string;

    @IsNotEmpty({ message: "Confirm Password Harus Diisi" })
    @IsString({ message: "Confirm Password harus berupa teks" })
    readonly confirmPassword: string;
}