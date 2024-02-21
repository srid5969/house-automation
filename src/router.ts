import express from 'express';
import {ApiHealthCheckRouter} from './controllers/api-health-check';


export const AppRouter = express.Router();

/**
 * @API :-Health Check {{baseURL}}/api/api-health-check/verify
 */
AppRouter.use('/api-health-check', ApiHealthCheckRouter);
