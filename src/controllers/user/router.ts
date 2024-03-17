import express from 'express';
import {asyncWrapper} from '../../middleware/async-wrapper';
import {UserController} from './controller';
import {handleUserSession} from '../../middleware';

export const UsersRouter = express.Router();

UsersRouter.post('/create&subscribe-plan', asyncWrapper(UserController.create));
UsersRouter.get(
  '/:id',
  handleUserSession(UserController.getById),
  asyncWrapper(UserController.getById)
);
UsersRouter.patch(
  '/:id',
  handleUserSession(UserController.updateById),
  asyncWrapper(UserController.updateById)
);
UsersRouter.delete(
  '/:id',
  handleUserSession(UserController.deleteById),
  asyncWrapper(UserController.deleteById)
);
UsersRouter.get(
  '/',
  handleUserSession(UserController.getAll),
  asyncWrapper(UserController.getAll)
);
UsersRouter.post('/', asyncWrapper(UserController.create));
