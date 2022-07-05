import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GoodModule } from './GoodModule/good.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './http-exception.filter';

@Module({
  imports: [
    GoodModule,
    MongooseModule.forRoot(
      'mongodb+srv://goods:64meposo!Soft1@cluster0.xcxsr.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
