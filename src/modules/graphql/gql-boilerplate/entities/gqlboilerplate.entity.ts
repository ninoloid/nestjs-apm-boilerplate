import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GQLBoilerplate {
  @Field(type => Int)
  code: number;

  @Field()
  message: string;
}
