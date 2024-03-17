import {asyncWrapper} from './../../middleware/async-wrapper';
import express from 'express';
import {HouseTypeController} from './controller';
import {handleUserSession} from '../../middleware';

export const HouseTypeRouter = express.Router();

HouseTypeRouter.get('/:id', asyncWrapper(HouseTypeController.getById));
HouseTypeRouter.patch(
  '/:id',
  handleUserSession(HouseTypeController.updateById),
  asyncWrapper(HouseTypeController.updateById)
);
HouseTypeRouter.delete(
  '/:id',
  handleUserSession(HouseTypeController.deleteById),
  asyncWrapper(HouseTypeController.deleteById)
);
HouseTypeRouter.get('/', asyncWrapper(HouseTypeController.getAll));
HouseTypeRouter.post(
  '/',
  handleUserSession(HouseTypeController.create),
  asyncWrapper(HouseTypeController.create)
);
