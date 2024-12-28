import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { AuthController } from './auth.controller';

@Module({
  controllers: [PeopleController, AuthController]
})
export class PeopleModule {}
