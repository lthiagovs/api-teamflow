import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { PeopleService } from './people.service';

@Module({

  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [PeopleController, AuthController],
  providers: [PeopleService]
  
})
export class PeopleModule {}