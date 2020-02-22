import * as Joi from '@hapi/joi';
import loadErrors from '../helpers/loadErrors';
import { ModelName } from 'src/types';

export const title = Joi.string().trim().min(1).max(100)
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT, errors);
  });

export const shortDescription = Joi.string().trim().min(5).max(100)
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT, errors);
  });

export const fullDescription = Joi.string().trim().min(1).max(10000)
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT, errors);
  });

export const location = Joi.string().trim().min(1).max(200)
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT, errors);
  });

export const startDate = Joi.string().trim().min(1).max(50)
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT, errors);
  });

export const endDate = Joi.string().trim().min(1).max(50)
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT, errors);
  });


// for updates
export const titleUpdate = Joi.string().trim().min(1).max(100)
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT, errors);
  });

export const shortDescriptionUpdate = Joi.string().trim().min(5).max(100)
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT, errors);
  });

export const fullDescriptionUpdate = Joi.string().trim().min(1).max(10000)
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT, errors);
  });

export const locationUpdate = Joi.string().trim().min(1).max(200)
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT, errors);
  });

export const startDateUpdate = Joi.string().trim().min(1).max(50)
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT, errors);
  });

export const endDateUpdate = Joi.string().trim().min(1).max(50)
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT, errors);
  });
