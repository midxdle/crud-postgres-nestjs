import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import PGConfigService from './pg.config.service';
import PGConfig from './pg.config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [PGConfig],
      // cache: true,
      validationSchema: Joi.object({
        PG_HOST: Joi.string().required(),
        PG_PORT: Joi.number().required(),
        PG_USERNAME: Joi.string().required(),
        PG_PASSWORD: Joi.string().required(),
        PG_DATABASE: Joi.string().required(),
        PG_SYNC: Joi.boolean().required(),
        PG_LOG: Joi.boolean().required(),
      }),
    }),
  ],
  providers: [ConfigService, PGConfigService],
  exports: [ConfigService, PGConfigService],
})
export default class PGConfigModule {}
