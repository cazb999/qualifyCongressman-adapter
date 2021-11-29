import express from 'express';

import apiFilmsRouter from './api/films';

const router = express.Router()

router.use('/films', apiFilmsRouter);

export default router;