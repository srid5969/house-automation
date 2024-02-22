import {asyncWrapper} from '../../middleware/async-wrapper';
import express from 'express';
import {AreaTypeController} from './controller';

export const AreaTypeRouter = express.Router();

AreaTypeRouter.get('/:id', asyncWrapper(AreaTypeController.getById));
AreaTypeRouter.patch('/:id', asyncWrapper(AreaTypeController.updateById));
AreaTypeRouter.delete('/:id', asyncWrapper(AreaTypeController.deleteById));
AreaTypeRouter.get('/', asyncWrapper(AreaTypeController.getAll));
AreaTypeRouter.post('/', asyncWrapper(AreaTypeController.create));
