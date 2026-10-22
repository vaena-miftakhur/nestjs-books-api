import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()//decorator untuk menandai kelas ini sebagai provider yang dapat di-inject ke dalam controller atau service lain
export class BooksService {
    constructor(
        @InjectRepository(Book) private readonly bookRepository: Repository<Book>
    ){}

    //mencari semua data buku
    async findAll(): Promise<Book[]> {
        return await this.bookRepository.find({
            order:{createdAt:'DESC'}
        })
    }

    //menyimpan data buku baru
    async create(book: CreateBookDto): Promise<Book> {
       const newBook = this.bookRepository.create(book)

       return await this.bookRepository.save(newBook)
    }

    // //menampilkan data buku berdasarkan id
    // findById(id: number): Book | undefined {
    //     return this.books.find(book => book.id === id);
    // }

    // //update data buku berdasarkan id
    // update(id: number, updatedBook: Partial<Book>): Book | undefined {
    //     const bookIndex = this.books.findIndex(book => book.id === id);
    //     if (bookIndex !== -1) {
    //         this.books[bookIndex] = { ...this.books[bookIndex], ...updatedBook };
    //         return this.books[bookIndex];
    //     }
    //     return undefined;
    // }

    // //hapus data buku berdasarkan id
    // delete(id: number): boolean {
    //     const bookIndex = this.books.findIndex(book => book.id === id);
    //     if (bookIndex !== -1) {
    //         this.books.splice(bookIndex, 1);
    //         return true;
    //     }
    //     return false;
    // }
}

