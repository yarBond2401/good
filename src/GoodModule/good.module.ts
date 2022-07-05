import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GoodController } from './good.controller';
import { GoodService } from './good.service';
import { GoodSchema, GoodSchemas } from './Schemas/Good';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: GoodSchema.name,
        useFactory: () => {
          const schema = GoodSchemas;
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          schema.plugin(require('mongoose-unique-validator'));
          return schema;
        },
      },
    ]),
  ],
  controllers: [GoodController],
  providers: [GoodService],
})
export class GoodModule {}
