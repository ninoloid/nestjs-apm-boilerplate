import { Module } from '@nestjs/common';
import { ApmModule } from './apm';
import { ConfigModule } from '@nestjs/config';
import { BoilerplateModule, DBBoilerplateModule } from './modules/rest';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'config/database';
import { internalRoutes } from './routes/default.routes';
import { GQLBoilerplateModule } from './modules/graphql/gql-boilerplate/gql-boilerplate.module';
import { GraphQLController } from './modules/graphql/controllers/graphql.controllers';
import { GQLDBBoilerplateModule } from './modules/graphql/gql-db-boilerplate/gql-db-boilerplate.module';
import { GraphQLDriverModule } from './modules/graphql/graphql.module';

@Module({
  imports: [
    ApmModule.register(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    GraphQLDriverModule,
    RouterModule.register(internalRoutes),
    BoilerplateModule,
    DBBoilerplateModule,
    GQLBoilerplateModule,
    GQLDBBoilerplateModule,
  ],
  controllers: [
    GraphQLController,
  ]
})
export class AppModule {}
