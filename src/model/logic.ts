import { Request, Response } from 'express';
import os from 'node:os';


export const getHealth = (req: Request, res: Response) => {
	res.send({ freeMemory: os.freemem() });
};
