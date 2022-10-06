import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DBBoilerplate } from '../entities/dbBoilerplate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GQLDBBoilerplateService {
  constructor(
    @InjectRepository(DBBoilerplate)
    private dbBoilerplateRepo: Repository<DBBoilerplate>
  ) {}

  async findAll(): Promise<DBBoilerplate[]> {
    try {
      return await this.dbBoilerplateRepo.find();
    } catch (error) {
      console.log(`@@@ findAll Error: `, error);
      throw new Error(error);
    }
  }
}
