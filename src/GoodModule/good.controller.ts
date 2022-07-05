import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { GoodService } from './good.service';
import { createGoodDto } from './GoodDto/createGoodDto';
import { updateGoodDto } from './GoodDto/updateGoodDto';
import { FindOneParams } from '../Pipes/FindOneParams';

@Controller('goods')
export class GoodController {
  constructor(private readonly goodService: GoodService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  setGood(@Body() good: createGoodDto) {
    return this.goodService.setNew(good);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  updateGood(@Param() param: FindOneParams, @Body() good: updateGoodDto) {
    return this.goodService.updateGoodById(param.id, good);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteGood(@Param() param: FindOneParams) {
    return this.goodService.deleteGoodById(param.id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAllGoods() {
    return this.goodService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findGoodById(@Param() param: FindOneParams) {
    return this.goodService.findById(param.id);
  }
}
