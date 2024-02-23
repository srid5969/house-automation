import express from 'express';
import {asyncWrapper} from '../../middleware/async-wrapper';
import {UserController} from './controller';

export const UsersRouter = express.Router();

UsersRouter.get('/:id', asyncWrapper(UserController.getById));
UsersRouter.patch('/:id', asyncWrapper(UserController.updateById));
UsersRouter.delete('/:id', asyncWrapper(UserController.deleteById));
UsersRouter.get('/', asyncWrapper(UserController.getAll));
UsersRouter.post('/', asyncWrapper(UserController.create));
