import { DataSource } from 'typeorm';
import { UserEntity } from '../database/entities/user.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const myDataSource = new DataSource({
	type: 'postgres',
	host: process.env.POSTGRES_HOST,
	port: parseInt(process.env.POSTGRES_PORT),
	username: process.env.POSTGRES_USERNAME,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DATABASE,
	synchronize: true,
	logging: true,
	entities: [UserEntity],
});
