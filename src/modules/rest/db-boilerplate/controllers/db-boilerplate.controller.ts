import { DBBoilerplateService } from '../services/db-boilerplate.service';
import { DBBoilerplate } from '../entities/dbBoilerplate.entity';
import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('DB Boilerplate')
@Controller()
export class DBBoilerplateController {
  constructor(private readonly dbBoilerplate: DBBoilerplateService) {}

  @ApiOkResponse({
    status: 200,
    description: 'The resources were returned successfully',
    type: DBBoilerplate,
    isArray: true
  })
  @Get('/db-boilerplates')

  async getAllDbBoilerplateEntries(): Promise<DBBoilerplate[]> {
    return await this.dbBoilerplate.findAll();
  }
}
