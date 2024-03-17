import {asyncWrapper} from '../../middleware/async-wrapper';
import express from 'express';
import {UserSubscriptionController} from './controller';
import {handleUserSession} from '../../middleware';

export const UserSubscriptionRouter = express.Router();

UserSubscriptionRouter.get(
  '/:id',
  asyncWrapper(UserSubscriptionController.getById)
);
UserSubscriptionRouter.patch(
  '/:id',
  handleUserSession(UserSubscriptionController.updateById),
  asyncWrapper(UserSubscriptionController.updateById)
);
UserSubscriptionRouter.delete(
  '/:id',
  handleUserSession(UserSubscriptionController.deleteById),
  asyncWrapper(UserSubscriptionController.deleteById)
);
UserSubscriptionRouter.get(
  '/',
  asyncWrapper(UserSubscriptionController.getAll)
);
UserSubscriptionRouter.post(
  '/',
  handleUserSession(UserSubscriptionController.create),
  asyncWrapper(UserSubscriptionController.create)
);
