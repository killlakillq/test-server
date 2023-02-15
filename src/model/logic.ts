import { Request, Response } from 'express';
import argon2 from 'argon2';
import os from 'node:os';
import { UserEntity } from '../database/entities/user.entity';
import { myDataSource } from '../config/typeorm.config';

myDataSource
	.initialize()
	.then(() => {
		console.log('Data Source has been initialized!');
	})
	.catch((err) => {
		console.error('Error during Data Source initialization:', err);
	});

const userRepository = myDataSource.getRepository(UserEntity);

export const signUp = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { name, email, password } = req.body;
		const hash = await argon2.hash(password, { type: 2 });

		await userRepository.save({ name: name, email: email, password: hash });
		
		return res.status(201).json({
			message: 'User was successfully registered',
		});
	} catch (error) {
		return res.status(500).json({ message: error });
	}
};

export const getHealth = (req: Request, res: Response): void => {
	res.send({ freeMemory: os.freemem() });
};
