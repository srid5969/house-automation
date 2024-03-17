import express from 'express';
import {handleUserSession} from '../../middleware';
import {asyncWrapper} from './../../middleware/async-wrapper';
import {PlanController} from './controller';

export const PlanRouter = express.Router();

PlanRouter.get('/:id', asyncWrapper(PlanController.getById));
PlanRouter.get('/', asyncWrapper(PlanController.getAll));
PlanRouter.patch(
  '/:id',
  handleUserSession(PlanController.updateById),
  asyncWrapper(PlanController.updateById)
);
PlanRouter.delete(
  '/:id',
  handleUserSession(PlanController.deleteById),
  asyncWrapper(PlanController.deleteById)
);
PlanRouter.post(
  '/',
  handleUserSession(PlanController.create),
  asyncWrapper(PlanController.create)
);
