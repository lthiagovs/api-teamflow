import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PeopleModule } from './people/people.module';
import { CheckModule } from './check/check.module';

@Module({
  imports: [UsersModule, PeopleModule, CheckModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
