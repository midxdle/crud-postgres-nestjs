import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import PGConfigModule from './config/postgresql/pg.config.module';
import PGConfigService from './config/postgresql/pg.config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PGConfigModule],
      useClass: PGConfigService,
    }),
    UserModule,
  ],
})
export default class AppModule {}
