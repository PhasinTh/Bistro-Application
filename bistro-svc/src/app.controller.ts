import { Controller, Get, Param } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Crud } from '@nestjsx/crud';
import { AppService } from './app.service';
import { CreateBistroDto } from './dtos/create.dto';
import { BistroRequestId, BistrosRequest } from './dtos/request.dto';
import { UpdateBistroDto } from './dtos/update.dto';
import { Bistro } from './entities/bistro.entity';

@Crud(
  {
    model: {
      type: Bistro
    },
    params: {
      id: {
        type: 'uuid',
        primary: true,
        field: 'id',
      },
      ownwerId: {
        type: 'uuid'
      }
    },
  }
)
@Controller()
export class AppController {
  constructor(public service: AppService) { }

  @Get('/owner/:ownerId')
  async findBistroByOwnerId(@Param() params) {
    return this.service.findOne({where: { ownerId: params.ownerId }})

  }
  // @GrpcMethod('BistroService', 'GetBistro')
  // async findOne(body: BistroRequestId) {
  //   return await this.appService.findOne(body.id)
  // }

  // @GrpcMethod('BistroService', 'DeleteBistro')
  // async delete(body: BistroRequestId) {
  //   const result = await this.appService.delete(body.id)
  //   return result
  // }

  // @GrpcMethod('BistroService', 'GetBistros')
  // async findAll(body: BistrosRequest) {
  //   const result = await this.appService.findAll(body)
  //   return result
  // }

  // @GrpcMethod('BistroService', 'CreateBistro')
  // async createOne(body: CreateBistroDto) {
  //   return await this.appService.create(body)
  // }

  // @GrpcMethod('BistroService', 'updateBistro')
  // async update(body: UpdateBistroDto) {
  //   const result = await this.appService.update(body)
  //   return result
  // }
}
