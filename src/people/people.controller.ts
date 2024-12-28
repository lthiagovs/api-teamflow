import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PeopleService } from './people.service';
import { Person } from './entity/person.entity';

@Controller('people')
export class PeopleController {

    constructor(private service: PeopleService){}

    @Get()
    getAll(){
        return this.service.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.service.getOne(id);
    }

    @Post()
    createPerson(@Body() person: Person){
        return this.service.createPerson(person);
    }

    @Put()
    updatePerson(@Param('id') id:number, @Body() person:Person){
        return this.service.updatePerson(id, person);
    }

    @Delete(':id')
    removePerson(@Param('id') id:number){
        return this.service.removePerson(id);
    }

}
