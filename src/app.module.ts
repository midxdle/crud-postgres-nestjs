import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import PGConfigModule from './config/postgresql/pg.config.module';
import PGConfigService from './config/postgresql/pg.config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PGConfigModule],
      useClass: PGConfigService,
    }),
  ],
})
export default class AppModule {}
