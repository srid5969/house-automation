import express from 'express';
import {ApiHealthCheckRouter} from './controllers/api-health-check';
import {AreaTypeRouter} from './controllers/automationAreaType.controller.ts';
import {HouseTypeRouter} from './controllers/houseType';
import {PlanTypeRouter} from './controllers/planType';
import {PlanRouter} from './controllers/plan';

export const AppRouter = express.Router();

/**
 * @API :-Health Check {{baseURL}}/api/api-health-check/verify
 */
AppRouter.use('/api-health-check', ApiHealthCheckRouter);
AppRouter.use('/area-types', AreaTypeRouter);
AppRouter.use('/house-types', HouseTypeRouter);
AppRouter.use('/plan-types', PlanTypeRouter);
AppRouter.use('/plans', PlanRouter);
