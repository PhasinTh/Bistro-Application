import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateBistroDto } from './dtos/create.dto';
import { BistroRequestId, BistrosRequest } from './dtos/request.dto';
import { UpdateBistroDto } from './dtos/update.dto';

@Controller()
export class AppController {
  constructor(private appService: AppService) { }

  @GrpcMethod('BistroService', 'GetBistro')
  async findOne(body: BistroRequestId) {
    return await this.appService.findOne(body.id)
  }

  @GrpcMethod('BistroService', 'DeleteBistro')
  async delete(body: BistroRequestId) {
    const result = await this.appService.delete(body.id)
    return result
  }

  @GrpcMethod('BistroService', 'GetBistros')
  async findAll(body: BistrosRequest) {
    const result = await this.appService.findAll(body)
    return result
  }

  @GrpcMethod('BistroService', 'CreateBistro')
  async createOne(body: CreateBistroDto) {
    return await this.appService.create(body)
  }

  @GrpcMethod('BistroService', 'updateBistro')
  async update(body: UpdateBistroDto) {
    const result = await this.appService.update(body)
    return result
  }
}
