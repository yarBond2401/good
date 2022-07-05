import { Good } from './good.interface';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class createGoodDto implements Good {
  @IsString()
  @IsOptional()
  category?: string;

  @IsNotEmpty()
  @IsNumber()
  costPrice: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  subCategory?: string;

  @IsDate()
  @IsOptional()
  completedAt?: Date;
}
