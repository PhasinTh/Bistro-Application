import { Delete, Injectable, UseFilters } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBistroDto } from './dtos/create.dto';
import { Bistro } from './entities/bistro.entity';

import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { UpdateBistroDto } from './dtos/update.dto';
import { RpcException } from '@nestjs/microservices';
import { BistrosRequest } from './dtos/request.dto';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Bistro) private bistroRepository: Repository<Bistro>) { }

  async findAll(data: BistrosRequest): Promise<Pagination<Bistro>> {
    try {
      return paginate<Bistro>(this.bistroRepository, {
        limit: data?.limit || 20,
        page: data?.page || 1
      });
    } catch (error) {
      throw new RpcException(error)
    }
  }

  findOne(id: string): Promise<Bistro> {
    try {
      return this.bistroRepository.findOneBy({ id });
    } catch (error) {
      throw new RpcException(error)
    }
  }

  async create(createdto: CreateBistroDto): Promise<Bistro> {
    try {
      const newBistro = this.bistroRepository.create(createdto)
      return this.bistroRepository.save(newBistro)
    } catch (error) {
      throw new RpcException(error)
    }

  }

  async update(updatedto: UpdateBistroDto): Promise<Bistro> {
    const temp = await this.bistroRepository.findOneBy({ id: updatedto.id })
    temp.name = updatedto.name,
      temp.description = updatedto.description,
      temp.image = updatedto.image,
      temp.ownerId = updatedto.owner_id
    return this.bistroRepository.save(temp)
  }

  async delete(id: string) {
    try {
      const temp = await this.bistroRepository.findOneBy({ id })
      await this.bistroRepository.remove(temp)
      return temp
    } catch (error) {
      throw new RpcException(error)
    }
  }
}
