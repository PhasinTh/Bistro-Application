import { Controller,Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { AppService } from './app.service';
import { CreateOrderDto } from './dtos/create.dto';
import { RequestBistro, RequestQR } from './dtos/request.dto';
import { Order } from './entities/order.entity';
@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(
    private readonly appService: AppService,
  ) { }


  @GrpcMethod('OrderService', 'CreateOrderByQR')
  async createOrderByQR(data: CreateOrderDto) {
    const result = await this.appService.createOrderByQR(data)
    return result
  }

  @GrpcMethod('OrderService', 'GetOrdersByBistro')
  async getOrdersByBistro(data: RequestBistro) {
    const result = await this.appService.findOrdersByBistro(data)
    return result
  }

  @GrpcMethod('OrderService', 'GetOrdersByQR')
  async getOrdersByQR(data: RequestQR) {
    const result = await this.appService.findOrdersByQR(data)
    return result
  }

  // place_orders
  @GrpcMethod('OrderService', 'PlaceOrder')
  async place_orders(data: any) {
    return this.appService.placeOrder(data)
  }

  @GrpcMethod('OrderService', 'DeleteItemsByOrder')
  async remove_items(data: any){
    return this.appService.delteItemsbyOrder(data)
  }

  @GrpcMethod('OrderService', 'UpdateOrderStatus')
  async update_order_status(data: any) {
    return this.appService.updateOrderStatus(data)
  }
}
