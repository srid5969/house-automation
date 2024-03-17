import express from 'express';
import {ApiHealthCheckRouter} from './controllers/api-health-check';
import {AuthRouter} from './controllers/auth';
import {AreaTypeRouter} from './controllers/automationAreaType';
import {ContactUsRouter} from './controllers/constactUs';
import {HouseTypeRouter} from './controllers/houseType';
import {NotificationRouter} from './controllers/notifications';
import {PlanRouter} from './controllers/plan';
import {PlanTypeRouter} from './controllers/planType';
import {UsersRouter} from './controllers/user';
import {UserReviewsRouter} from './controllers/user-reviews';
import {UserSubscriptionRouter} from './controllers/user-subscription';

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
AppRouter.use('/auth', AuthRouter);
