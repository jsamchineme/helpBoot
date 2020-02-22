import * as Joi from '@hapi/joi';
import loadErrors from '../helpers/loadErrors';
import { ModelName } from 'src/types';

export const email = Joi.string().strict().trim().strict()
  .min(3)
  .max(70)
  .email()
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.USER, errors);
  });

export const password = Joi.string().trim().strict()
  .max(40)
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.USER, errors);
  });

export const firstname = Joi.string().trim().min(1).max(30)
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.USER, errors);
  });

export const lastname = Joi.string().trim().min(1).max(30)
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.USER, errors);
  });

export const shortBio = Joi.string().trim().min(10).max(200)
  .error((errors) => {
    throw loadErrors(ModelName.USER, errors);
  });

export const locationCity = Joi.string().trim().min(1).max(50)
  .error((errors) => {
    throw loadErrors(ModelName.USER, errors);
  });

export const locationState = Joi.string().trim().min(1).max(50)
  .error((errors) => {
    throw loadErrors(ModelName.USER, errors);
  });

export const address = Joi.string().trim().min(1).max(200)
  .error((errors) => {
    throw loadErrors(ModelName.USER, errors);
  });