import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export default class PGConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  get HOST(): string {
    return this.configService.get<string>('PG.HOST');
  }

  get PORT(): number {
    return +this.configService.get<number>('PG.PORT');
  }

  get USERNAME(): string {
    return this.configService.get<string>('PG.USERNAME');
  }

  get PASSWORD(): string {
    return this.configService.get<string>('PG.PASSWORD');
  }

  get DATABASE(): string {
    return this.configService.get<string>('PG.DATABASE');
  }

  get SYNC(): boolean {
    return this.configService.get<boolean>('PG.SYNC');
  }

  get LOG(): boolean {
    return this.configService.get<boolean>('PG.LOG');
  }

  createTypeOrmOptions(
    connectionName?: string,
  ): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      name: connectionName,
      type: 'postgres',
      host: this.HOST,
      port: this.PORT,
      username: this.USERNAME,
      password: this.PASSWORD,
      database: this.DATABASE,
      synchronize: this.SYNC,
      logging: this.LOG,
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['dist/db/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations',
      migrationsRun: false,
    };
  }
}
