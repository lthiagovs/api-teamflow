import { Injectable, NotFoundException } from '@nestjs/common';
import { Person } from './entities/person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dtos/createperson.dto';

@Injectable()
export class PeopleService {
    constructor(@InjectRepository(Person) private repository: Repository<Person>) {}

    getAll(){
        return this.repository.find();
    }

    getOne(id: number){
        return this.repository.findBy({id})
    }

    createPerson(createPerson: CreatePersonDto){
        const person = this.repository.create(createPerson);
        this.repository.save(person);
    }

    async updatePerson(id: number, attrs: Partial<Person>){
        const person = await this.getOne(id);
        if(!person){
            throw new NotFoundException('person not found');
        }

        Object.assign(person, attrs);
        return this.repository.save(person);
    }

    async removePerson(id: number){
        const person = await this.getOne(id);
        if(!person){
            throw new NotFoundException('person not found');
        }

        return this.repository.remove(person);
    }

}
