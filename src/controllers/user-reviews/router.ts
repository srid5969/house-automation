import {asyncWrapper} from '../../middleware/async-wrapper';
import express from 'express';
import {UserReviewsController} from './controller';

export const UserReviewsRouter = express.Router();

UserReviewsRouter.get('/:id', asyncWrapper(UserReviewsController.getById));
UserReviewsRouter.patch('/:id', asyncWrapper(UserReviewsController.updateById));
UserReviewsRouter.delete('/:id', asyncWrapper(UserReviewsController.deleteById));
UserReviewsRouter.get('/', asyncWrapper(UserReviewsController.getAll));
UserReviewsRouter.post('/', asyncWrapper(UserReviewsController.create));
