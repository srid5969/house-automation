import {asyncWrapper} from './../../middleware/async-wrapper';
import express from 'express';
import {HouseTypeController} from './controller';

export const HouseTypeRouter = express.Router();

HouseTypeRouter.get('/:id', asyncWrapper(HouseTypeController.getById));
HouseTypeRouter.patch('/:id', asyncWrapper(HouseTypeController.updateById));
HouseTypeRouter.delete('/:id', asyncWrapper(HouseTypeController.deleteById));
HouseTypeRouter.get('/', asyncWrapper(HouseTypeController.getAll));
HouseTypeRouter.post('/', asyncWrapper(HouseTypeController.create));
