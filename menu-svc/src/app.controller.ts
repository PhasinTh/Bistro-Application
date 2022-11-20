import { Controller, Get, Param } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { AppService } from './app.service';
import { Menu } from './entities/menu.entity';

@Crud(
  {
    model: {
      type: Menu
    },
    params: {
      id: {
        type: 'uuid',
        primary: true,
        field: 'id',
      },
    },
  }
)
@Controller()
export class AppController {
  constructor(public service: AppService) { }

  @Get('/bistro/:bistroId')
  async findMenuByBistroId(@Param() params) {
    console.log(params)
    return this.service.find({where: { bistroId: params.bistroId }})
  }


  // @GrpcMethod('MenuService', 'GetMenu')
  // async findOne(body: MenuRequestId) {
  //   return await this.appService.findOne(body.id)
  // }

  // @GrpcMethod('MenuService', 'DeleteMenu')
  // async delete(body: MenuRequestId) {
  //   const result = await this.appService.delete(body.id)
  //   return result
  // }

  // @GrpcMethod('MenuService', 'GetMenus')
  // async findAll(body: MenusRequestRequest) {
  //   const result = await this.appService.findAll(body)
  //   return result
  // }

  // @GrpcMethod('MenuService', 'CreateMenu')
  // async createOne(body: CreateMenuDto) {
  //   return await this.appService.create(body)
  // }

  // @GrpcMethod('MenuService', 'updateMenu')
  // async update(body: UpdateMenuDto) {
  //   const result = await this.appService.update(body)
  //   return result
  // }

  // @GrpcMethod('MenuService', 'GetMenusByBistro')
  // async findByBistro(body: MenuByBistroRequest) {
  //   const result = await this.appService.findByBistro(body)
  //   return result
  // }
}
