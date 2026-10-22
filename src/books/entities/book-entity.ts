import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'books'})

export class Book{
    //uuid
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'varchar', length:100})
    title: string;

    @Column({type:'varchar', length:50})
    author: string;

    @Column({type:'varchar', length:100})
    isbn: string;

    @Column({type:'int', default:0})
    publishedYear: number;

    @Column({type:'boolean', default:true})
    isAvailable: boolean;

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @CreateDateColumn({name:'updated_at'})
    updatedAt: Date;

    @CreateDateColumn({name:'deleted_at', default: null})
    deletedAt: Date;
}