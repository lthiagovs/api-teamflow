import { Injectable } from '@nestjs/common';
import { PeopleRepository } from './people.repository';
import { Person } from './entity/person.entity';

@Injectable()
export class PeopleService {
    constructor(private repository: PeopleRepository) {}

    getAll(){
        return this.repository.getAll();
    }

    getOne(id: number){
        return this.repository.getOne(id);
    }

    createPerson(person: Person){
        return this.repository.createPerson(person);
    }

    updatePerson(id: number, person: Person){
        return this.repository.updatePerson(id, person);
    }

    removePerson(id: number){
        return this.repository.removePerson(id);
    }

}
