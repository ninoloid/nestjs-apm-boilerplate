import { Module } from '@nestjs/common';
import { GQLBoilerplateService } from './services/gql-boilerplate.service';
import { GQLBoilerplateResolver } from './resolvers/gql-boilerplate.resolver';

@Module({
  providers: [GQLBoilerplateService, GQLBoilerplateResolver],
})

export class GQLBoilerplateModule {}
