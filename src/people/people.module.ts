import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entity/person.entity';
import { PeopleService } from './people.service';
import { PeopleRepository } from './people.repository';

@Module({

  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [PeopleController, AuthController],
  providers: [PeopleService, PeopleRepository]
  
})
export class PeopleModule {
}
