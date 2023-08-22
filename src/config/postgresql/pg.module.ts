import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { z } from 'zod';
import PGConfigService from './pg.service';
import PGConfig from './pg.config';

Module({
  imports: [
    ConfigModule.forRoot({
      load: [PGConfig],
      cache: true,
      validationSchema: z
        .object({
          PG_HOST: z.string(),
          PG_PORT: z.number(),
          PG_USERNAME: z.string(),
          PG_PASSWORD: z.string(),
          PG_DATABASE: z.string(),
          PG_SYNC: z.boolean(),
          PG_LOG: z.boolean(),
        })
        .required(),
    }),
  ],
  providers: [ConfigService, PGConfigService],
  exports: [ConfigService, PGConfigService],
});
export default class PGConfigModule {}
