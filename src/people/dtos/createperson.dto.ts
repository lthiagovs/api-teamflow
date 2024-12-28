import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreatePersonDto{
    
    @ApiProperty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    password: string;

    @ApiProperty()
    @IsNumber()
    age: number;

}