import express from 'express';
import { getHealth, signUp } from '../model/logic';

const router = express.Router();

router.use('/api/v1/health', getHealth);
router.post('/api/v1/auth/signup', signUp);

export = router;
