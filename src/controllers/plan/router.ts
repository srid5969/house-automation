import {asyncWrapper} from './../../middleware/async-wrapper';
import express from 'express';
import {PlanController} from './controller';

export const PlanRouter = express.Router();

PlanRouter.get('/:id', asyncWrapper(PlanController.getById));
PlanRouter.patch('/:id', asyncWrapper(PlanController.updateById));
PlanRouter.delete('/:id', asyncWrapper(PlanController.deleteById));
PlanRouter.get('/', asyncWrapper(PlanController.getAll));
PlanRouter.post('/', asyncWrapper(PlanController.create));
