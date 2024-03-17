import {asyncWrapper} from './../../middleware/async-wrapper';
import express from 'express';
import {PlanTypeController} from './controller';
import {handleUserSession} from '../../middleware';

export const PlanTypeRouter = express.Router();

PlanTypeRouter.get('/:id', asyncWrapper(PlanTypeController.getById));
PlanTypeRouter.get('/', asyncWrapper(PlanTypeController.getAll));
PlanTypeRouter.patch(
  '/:id',
  handleUserSession(PlanTypeController.updateById),
  asyncWrapper(PlanTypeController.updateById)
);
PlanTypeRouter.delete(
  '/:id',
  handleUserSession(PlanTypeController.deleteById),
  asyncWrapper(PlanTypeController.deleteById)
);
PlanTypeRouter.post(
  '/',
  handleUserSession(PlanTypeController.create),
  asyncWrapper(PlanTypeController.create)
);
