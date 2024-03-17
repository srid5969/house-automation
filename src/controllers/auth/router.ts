import {asyncWrapper} from '../../middleware/async-wrapper';
import express from 'express';
import {AuthController} from './controller';

export const AuthRouter = express.Router();

AuthRouter.post('/login', asyncWrapper(AuthController.login));
