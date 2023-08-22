import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import PGConfig from './pg.config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export default class PGConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(PGConfig.KEY)
    private pgConfig: ConfigType<typeof PGConfig>,
  ) {}

  createTypeOrmOptions(
    connectionName?: string,
  ): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      name: connectionName,
      type: 'postgres',
      host: this.pgConfig.HOST,
      port: this.pgConfig.PORT,
      username: this.pgConfig.USERNAME,
      password: this.pgConfig.PASSWORD,
      database: this.pgConfig.DATABASE,
      synchronize: this.pgConfig.SYNC,
      logging: this.pgConfig.LOG,
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['dist/db/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations',
      migrationsRun: false,
    };
  }
}
