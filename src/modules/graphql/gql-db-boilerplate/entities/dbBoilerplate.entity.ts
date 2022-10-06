import { Field, ObjectType, GraphQLISODateTime, Int } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('dbBoilerplate')
@ObjectType()
export class DBBoilerplate {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column('varchar')
  @Field()
  firstName: string;

  @Column('varchar')
  @Field()
  lastName: string;

  @CreateDateColumn({ name: 'createdAt' })
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  @Field(() => GraphQLISODateTime, { nullable: true })
  updatedAt?: Date;
}
