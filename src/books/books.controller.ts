import { Controller, Delete, Get, Param, Post, Put, Patch } from '@nestjs/common';

@Controller('books')
export class BooksController {
    @Get()
    getBooks():string{
        return "semua data buku";
    }

    //menambahkan data buku baru
    @Post()
    CreateBooks():string{
        return "buku berhasil ditambahkan";
    }

    //menampilkan data buku berdasarkan id 1
    @Get(':id')
    getBooksById(@Param('id') id:string):string{
        return `data buku berdasarkan id: ${id}`;
    }

    @Put(':id')
    UpdateBooksPut(@Param('id') id:string):string{
        return `buku berhasil diperbarui: ${id}`;
    }

    @Patch(':id')
    UpdateBooksPatch(@Param('id') id:string):string{
        return `buku berhasil diperbarui: ${id}`;
    }

    @Delete(':id')
    DeleteBooks(@Param('id') id:string):string{
        return `buku berhasil dihapus: ${id}`;
    }
}
