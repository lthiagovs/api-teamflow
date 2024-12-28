import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './people/entities/person.entity';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'mydatabase',
    entities: [Person],
    synchronize: true

  }), PeopleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
