import {asyncWrapper} from '../../middleware/async-wrapper';
import express from 'express';
import {UserSubscriptionController} from './controller';

export const UserSubscriptionRouter = express.Router();

UserSubscriptionRouter.get(
  '/:id',
  asyncWrapper(UserSubscriptionController.getById)
);
UserSubscriptionRouter.patch(
  '/:id',
  asyncWrapper(UserSubscriptionController.updateById)
);
UserSubscriptionRouter.delete(
  '/:id',
  asyncWrapper(UserSubscriptionController.deleteById)
);
UserSubscriptionRouter.get(
  '/',
  asyncWrapper(UserSubscriptionController.getAll)
);
UserSubscriptionRouter.post(
  '/',
  asyncWrapper(UserSubscriptionController.create)
);
