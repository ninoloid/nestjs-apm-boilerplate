import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBBoilerplate } from './entities/dbBoilerplate.entity';
import { DBBoilerplateService } from './services/db-boilerplate.service';
import { DBBoilerplateController } from './controllers/db-boilerplate.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DBBoilerplate,
    ])
  ],
  controllers: [DBBoilerplateController],
  providers: [DBBoilerplateService],

})

export class DBBoilerplateModule {}
