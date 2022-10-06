import { Query, Resolver } from '@nestjs/graphql';
import { GQLBoilerplate } from '../entities/gqlboilerplate.entity';
import { GQLBoilerplateService } from '../services/gql-boilerplate.service';

@Resolver((of) => GQLBoilerplate)
export class GQLBoilerplateResolver {
  constructor(private readonly gqlBoilerplateService: GQLBoilerplateService) {}

  @Query((returns) => GQLBoilerplate)
  async getHello(): Promise<GQLBoilerplate> {
    return await this.gqlBoilerplateService.getHello();
  }
}
