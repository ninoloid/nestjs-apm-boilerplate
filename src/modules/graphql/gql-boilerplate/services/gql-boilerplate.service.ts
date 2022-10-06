import { Injectable } from '@nestjs/common';
import { GQLBoilerplate } from '../entities/gqlboilerplate.entity';

@Injectable()
export class GQLBoilerplateService {
  getHello(): GQLBoilerplate {
    return {
      code: 200,
      message: 'Hello World!',
    };
  }
}
