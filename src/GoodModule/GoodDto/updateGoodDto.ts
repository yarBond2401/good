import { Good } from './good.interface';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class updateGoodDto implements Good {
  @IsString()
  @IsOptional()
  category?: string;

  @IsNumber()
  @IsOptional()
  costPrice: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  subCategory?: string;

  @IsDate()
  completedAt: Date;
}
