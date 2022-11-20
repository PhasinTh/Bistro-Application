import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common'
import { RPCExceptionFilter } from './rpc-exception.filter';

async function bootstrap() {
  const URL = process.env.APP_URL || '0.0.0.0:3000'

  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await app.listen(5001);
  Logger.log(`Application is running on: ${app.getUrl()}`, 'Main')
}

bootstrap();
