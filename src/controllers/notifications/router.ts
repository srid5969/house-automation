import {asyncWrapper} from '../../middleware/async-wrapper';
import express from 'express';
import {NotificationsController} from './controller';

export const NotificationRouter = express.Router();

NotificationRouter.get('/:id', asyncWrapper(NotificationsController.getById));
NotificationRouter.patch(
  '/:id',
  asyncWrapper(NotificationsController.updateById)
);
NotificationRouter.delete(
  '/:id',
  asyncWrapper(NotificationsController.deleteById)
);
NotificationRouter.get('/', asyncWrapper(NotificationsController.getAll));
NotificationRouter.post('/', asyncWrapper(NotificationsController.create));
