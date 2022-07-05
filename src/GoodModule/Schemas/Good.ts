import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsDate, IsNumber, IsString } from 'class-validator';

export type GoodSchemaDocument = GoodSchema & Document;

@Schema()
export class GoodSchema {
  @IsNumber()
  @Prop({ required: true, unique: true, type: String })
  name: string;

  @IsNumber()
  @Prop({ required: true })
  costPrice: number;

  @IsNumber()
  @Prop({ default: 0 })
  salePrice: number;

  @IsNumber()
  @Prop({ default: 0 })
  wholesalePrice: number;

  @IsString()
  @Prop({ default: '' })
  description: string;

  @IsString()
  @Prop({ default: '' })
  category: string;

  @IsString()
  @Prop({ default: '' })
  subCategory: string;

  @IsDate()
  @Prop()
  completedAt?: Date;

  @IsDate()
  @Prop()
  createdAt: Date;

  @IsDate()
  @Prop()
  deleteAt?: Date;
}

export const GoodSchemas = SchemaFactory.createForClass(GoodSchema);
