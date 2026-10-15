import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {
    @IsNotEmpty({ message: "Title Harus Diisi" })
    @IsString({ message: "Title harus berupa teks" })
    readonly title: string;

    @IsNotEmpty({ message: "Author Harus Diisi" })
    @IsString({ message: "Author harus berupa teks" })
    readonly author: string;

    @IsNotEmpty({ message: "ISBN Harus Diisi" })
    @IsString({ message: "ISBN harus berupa teks" })
    readonly isbn: string;

    @IsNotEmpty({ message: "Published Year Harus Diisi" })
    @IsInt({ message: "Published Year harus berupa angka bulat" })
    readonly publishedYear: number;
}