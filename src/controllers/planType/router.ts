import {asyncWrapper} from './../../middleware/async-wrapper';
import express from 'express';
import {PlanTypeController} from './controller';

export const PlanTypeRouter = express.Router();

PlanTypeRouter.get('/:id', asyncWrapper(PlanTypeController.getById));
PlanTypeRouter.patch('/:id', asyncWrapper(PlanTypeController.updateById));
PlanTypeRouter.delete('/:id', asyncWrapper(PlanTypeController.deleteById));
PlanTypeRouter.get('/', asyncWrapper(PlanTypeController.getAll));
PlanTypeRouter.post('/', asyncWrapper(PlanTypeController.create));
