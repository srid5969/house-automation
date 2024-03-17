import {asyncWrapper} from '../../middleware/async-wrapper';
import express from 'express';
import {AreaTypeController} from './controller';
import {handleUserSession} from '../../middleware';

export const AreaTypeRouter = express.Router();

AreaTypeRouter.get('/:id', asyncWrapper(AreaTypeController.getById));
AreaTypeRouter.patch(
  '/:id',
  handleUserSession(AreaTypeController.updateById),
  asyncWrapper(AreaTypeController.updateById)
);
AreaTypeRouter.delete(
  '/:id',
  handleUserSession(AreaTypeController.deleteById),
  asyncWrapper(AreaTypeController.deleteById)
);
AreaTypeRouter.get('/', asyncWrapper(AreaTypeController.getAll));
AreaTypeRouter.post(
  '/',
  handleUserSession(AreaTypeController.create),
  asyncWrapper(AreaTypeController.create)
);
