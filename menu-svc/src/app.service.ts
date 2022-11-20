import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';

import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class AppService extends TypeOrmCrudService<Menu> {
  constructor(@InjectRepository(Menu) repo) {
    super(repo)
   }  

  // async findAll(data: MenusRequestRequest): Promise<Pagination<Menu>> {
  //   try {
  //     return paginate<Menu>(this.menuRepository, {
  //       limit: data?.limit || 20,
  //       page: data?.page || 1
  //     });
  //   } catch (error) {
  //     throw new RpcException(error)
  //   }
  // }

  // findOne(id: string): Promise<Menu> {
  //   try {
  //     return this.menuRepository.findOneBy({ id });
  //   } catch (error) {
  //     throw new RpcException(error)
  //   }
  // }

  // async create(createdto: CreateMenuDto): Promise<Menu> {
  //   try {
  //     const newMenu = this.menuRepository.create(createdto)
  //     return this.menuRepository.save(newMenu)
  //   } catch (error) {
  //     throw new RpcException(error)
  //   }

  // }

  // async update(updatedto: UpdateMenuDto): Promise<Menu> {
  //   const temp = await this.menuRepository.findOneBy({ id: updatedto.id })
  //   temp.name = updatedto.name
  //   temp.description = updatedto.description
  //   temp.image = updatedto.image
  //   temp.bistroId = updatedto.bistroId
  //   return this.menuRepository.save(temp)
  // }

  // async delete(id: string) {
  //   try {
  //     const temp = await this.menuRepository.findOneBy({ id })
  //     await this.menuRepository.remove(temp)
  //     return temp
  //   } catch (error) {
  //     throw new RpcException(error)
  //   }
  // }


  // async findByBistro(data: MenuByBistroRequest) {
  //   try {
  //     return paginate<Menu>(this.menuRepository, { limit: data?.meta?.limit , page: data?.meta?.page}, {
  //       where: {
  //         bistroId: data.bistroId || ''
  //       }
  //     });
  //   } catch (error) {
  //     throw new RpcException(error)
  //   }
  // }
}
