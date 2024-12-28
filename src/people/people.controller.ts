import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('people')
export class PeopleController {

    @Get()
    getAll(){
        return 'any';
    }

    @Post()
    createPerson(){
        return 'any';
    }

    @Put()
    updatePerson(){
        return 'any';
    }

    @Delete()
    removePerson(){
        return 'any'; 
    }

}
