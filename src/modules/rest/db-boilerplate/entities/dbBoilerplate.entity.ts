import { Field, ObjectType, GraphQLISODateTime, Int } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('dbBoilerplate')
@ObjectType()
export class DBBoilerplate {
  @ApiProperty({ description: 'Primary key as ID', example: 1 })
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @ApiProperty({
    description: 'First Name',
    example: 'Namadepan',
  })
  @Column('varchar')
  @Field()
  firstName: string;

  @ApiProperty({
    description: 'Last Name',
    example: 'Namabelakang',
  })
  @Column('varchar')
  @Field()
  lastName: string;

  @ApiProperty({
    description: 'Created at',
    example: new Date(),
  })
  @CreateDateColumn({ name: 'createdAt' })
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @ApiProperty({
    description: 'Updated at',
    example: new Date(),
  })
  @UpdateDateColumn({ name: 'updatedAt' })
  @Field(() => GraphQLISODateTime, { nullable: true })
  updatedAt?: Date;
}
