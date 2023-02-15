import express from 'express';
import { getHealth } from '../model/logic';

const router = express.Router();

router.use('/api/v1/health', getHealth);

export = router;