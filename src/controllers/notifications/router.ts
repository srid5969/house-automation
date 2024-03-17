import {asyncWrapper} from '../../middleware/async-wrapper';
import express from 'express';
import {NotificationsController} from './controller';
import {handleUserSession} from '../../middleware';

export const NotificationRouter = express.Router();

NotificationRouter.get(
  '/:id',
  handleUserSession(NotificationsController.getById),
  asyncWrapper(NotificationsController.getById)
);
NotificationRouter.patch(
  '/:id',
  handleUserSession(NotificationsController.updateById),
  asyncWrapper(NotificationsController.updateById)
);
NotificationRouter.delete(
  '/:id',
  handleUserSession(NotificationsController.deleteById),
  asyncWrapper(NotificationsController.deleteById)
);
NotificationRouter.get(
  '/',
  handleUserSession(NotificationsController.getAll),
  asyncWrapper(NotificationsController.getAll)
);
NotificationRouter.post(
  '/',
  handleUserSession(NotificationsController.create),
  asyncWrapper(NotificationsController.create)
);
