import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { BoilerplateService } from '../services/boilerplate.service';

@ApiTags('Child Route')
@Controller()
export class BoilerplateController {
  constructor(private readonly boilerplateService: BoilerplateService) {}

  @ApiOkResponse({
    status: 200,
    description: 'Return \'Hello World\' string',
  })
  @Get('/hello')
  getHello(): string {
    return this.boilerplateService.getHello();
  }
}
