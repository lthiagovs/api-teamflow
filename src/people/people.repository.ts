import { Injectable } from "@nestjs/common";
import { Person } from "./entity/person.entity";

@Injectable()
export class PeopleRepository{
    
    getAll(){

    };

    getOne(id: number){

    }

    createPerson(person: Person){

    };

    updatePerson(id: number, person: Person){

    };

    removePerson(id: number){

    };
}