import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PeopleService } from './people.service';
import { Person } from './entities/person.entity';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePersonDto } from './dtos/createperson.dto';

@ApiTags('people')
@Controller('people')
export class PeopleController {

    constructor(private service: PeopleService){}

    
    @ApiOperation({summary: 'Get all entries'})
    @Get()
    getAll(){
        return this.service.getAll();
    }

    @ApiOperation({summary: 'Query one people by ID'})
    @Get(':id')
    getOne(@Param('id') id: number){
        return this.service.getOne(id);
    }

    @ApiOperation({summary: 'Create a new person'})
    @Post()
    createPerson(@Body() person: CreatePersonDto){
        return this.service.createPerson(person);
    }

    @ApiOperation({summary: 'Update a person'})
    @Put()
    updatePerson(@Param('id') id:number, @Body() person:Person){
        return this.service.updatePerson(id, person);
    }

    @ApiOperation({summary: 'Remove a person'})
    @Delete(':id')
    removePerson(@Param('id') id:number){
        return this.service.removePerson(id);
    }

}
