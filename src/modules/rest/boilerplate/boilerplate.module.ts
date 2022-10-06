import { Module } from '@nestjs/common';
import { BoilerplateController } from './controllers/boilerplate.controller';
import { BoilerplateService } from './services/boilerplate.service';

@Module({
  controllers: [BoilerplateController],
  providers: [BoilerplateService],
})

export class BoilerplateModule {}
