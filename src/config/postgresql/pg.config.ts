import { registerAs } from '@nestjs/config';

export default registerAs('PG', () => ({
  HOST: process.env.PG_HOST,
  PORT: parseInt(process.env.PG_PORT, 10),
  USERNAME: process.env.PG_USERNAME,
  PASSWORD: process.env.PG_PASSWORD,
  DATABASE: process.env.PG_DATABASE,
  SYNC: process.env.PG_SYNC,
  LOG: process.env.PG_LOG,
}));
