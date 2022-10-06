import { Query, Resolver } from '@nestjs/graphql';
import { GQLDBBoilerplateService } from '../services/gql-db-boilerplate.service';
import { DBBoilerplate } from '../entities/dbBoilerplate.entity';

@Resolver((of) => DBBoilerplate)
export class GQLDBBoilerplateResolver {
  constructor(private readonly gqlDbBoilerplate: GQLDBBoilerplateService) {}

  @Query((returns) => [DBBoilerplate])
  async getAllDbBoilerplateEntries(): Promise<DBBoilerplate[]> {
    return await this.gqlDbBoilerplate.findAll();
  }
}
