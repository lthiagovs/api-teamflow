import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    age: number;

}