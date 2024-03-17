import {asyncWrapper} from '../../middleware/async-wrapper';
import express from 'express';
import {ContactUsController} from './controller';
import {handleUserSession} from '../../middleware';

export const ContactUsRouter = express.Router();

ContactUsRouter.get('/:id', asyncWrapper(ContactUsController.getById));
ContactUsRouter.patch(
  '/:id',
  handleUserSession(ContactUsController.updateById),
  asyncWrapper(ContactUsController.updateById)
);
ContactUsRouter.delete(
  '/:id',
  handleUserSession(ContactUsController.deleteById),
  asyncWrapper(ContactUsController.deleteById)
);
ContactUsRouter.get('/', asyncWrapper(ContactUsController.getAll));
ContactUsRouter.post('/', asyncWrapper(ContactUsController.create));
