import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBBoilerplate } from './entities/dbBoilerplate.entity';
import { GQLDBBoilerplateService } from './services/gql-db-boilerplate.service';
import { GQLDBBoilerplateResolver } from './resolvers/gql-db-boilerplate.resolvers';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DBBoilerplate,
    ])
  ],
  providers: [GQLDBBoilerplateService, GQLDBBoilerplateResolver],
})

export class GQLDBBoilerplateModule {}
