import {asyncWrapper} from '../../middleware/async-wrapper';
import express from 'express';
import {UserReviewsController} from './controller';
import {handleUserSession} from '../../middleware';

export const UserReviewsRouter = express.Router();

UserReviewsRouter.get('/:id', asyncWrapper(UserReviewsController.getById));
UserReviewsRouter.patch(
  '/:id',
  handleUserSession(UserReviewsController.updateById),
  asyncWrapper(UserReviewsController.updateById)
);
UserReviewsRouter.delete(
  '/:id',
  handleUserSession(UserReviewsController.deleteById),
  asyncWrapper(UserReviewsController.deleteById)
);
UserReviewsRouter.get('/', asyncWrapper(UserReviewsController.getAll));
UserReviewsRouter.post('/', asyncWrapper(UserReviewsController.create));
