import express from 'express';
import {ApiHealthCheckRouter} from './controllers/api-health-check';
import {AreaTypeRouter} from './controllers/automationAreaType';
import {HouseTypeRouter} from './controllers/houseType';
import {PlanTypeRouter} from './controllers/planType';
import {PlanRouter} from './controllers/plan';
import {NotificationRouter} from './controllers/notifications';
import {UsersRouter} from './controllers/user';
import {UserSubscriptionRouter} from './controllers/user-subscription';
import {ContactUsRouter} from './controllers/constactUs';
import {UserReviewsRouter} from './controllers/user-reviews';

export const AppRouter = express.Router();

/**
 * @API :-Health Check {{baseURL}}/api/api-health-check/verify
 */
AppRouter.use('/api-health-check', ApiHealthCheckRouter);
AppRouter.use('/area-types', AreaTypeRouter);
AppRouter.use('/house-types', HouseTypeRouter);
AppRouter.use('/plan-types', PlanTypeRouter);
AppRouter.use('/plans', PlanRouter);
AppRouter.use('/notifications', NotificationRouter);
AppRouter.use('/users', UsersRouter);
AppRouter.use('/user-subscriptions', UserSubscriptionRouter);
AppRouter.use('/contact-us', ContactUsRouter);
AppRouter.use('/reviews', UserReviewsRouter);
