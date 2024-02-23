import {asyncWrapper} from '../../middleware/async-wrapper';
import express from 'express';
import {ContactUsController} from './controller';

export const ContactUsRouter = express.Router();

ContactUsRouter.get('/:id', asyncWrapper(ContactUsController.getById));
ContactUsRouter.patch('/:id', asyncWrapper(ContactUsController.updateById));
ContactUsRouter.delete('/:id', asyncWrapper(ContactUsController.deleteById));
ContactUsRouter.get('/', asyncWrapper(ContactUsController.getAll));
ContactUsRouter.post('/', asyncWrapper(ContactUsController.create));
