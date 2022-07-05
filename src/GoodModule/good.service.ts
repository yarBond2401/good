import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { GoodSchema, GoodSchemaDocument } from './Schemas/Good';
import { createGoodDto } from './GoodDto/createGoodDto';
import { updateGoodDto } from './GoodDto/updateGoodDto';
import { GoodNotFoundException } from './Exceptions/GoodNotFoundException';

@Injectable()
export class GoodService {
  constructor(
    @InjectModel(GoodSchema.name)
    private readonly model: Model<GoodSchemaDocument>,
  ) {}

  async findAll(): Promise<GoodSchema[]> {
    return await this.model.find().exec();
  }

  async findById(id: string): Promise<GoodSchema> {
    const good = await this.model.findById(id).exec();
    if (!good) {
      throw new GoodNotFoundException();
    }
    return good;
  }

  async setNew(newGood: createGoodDto): Promise<GoodSchema> {
    return (
      await this.model.create({
        ...newGood,
        createdAt: new Date(),
      })
    ).save();
  }

  async updateGoodById(
    id: string,
    newGood: updateGoodDto,
  ): Promise<GoodSchema> {
    return await this.model.findByIdAndUpdate(id, newGood).exec();
  }

  async deleteGoodById(id: string): Promise<GoodSchema> {
    const good = await this.model.findByIdAndDelete(id).exec();
    if (!good) {
      throw new GoodNotFoundException();
    }
    return good;
  }
}
