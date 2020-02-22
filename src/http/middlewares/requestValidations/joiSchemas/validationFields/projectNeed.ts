import * as Joi from '@hapi/joi';
import loadErrors from '../helpers/loadErrors';
import { ModelName } from 'src/types';
import { ProjectNeedType } from 'src/types/models';

export const type = Joi.string().trim().min(1).max(200)
  .valid(ProjectNeedType.ITEM, ProjectNeedType.PEOPLE)
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT_NEED, errors);
  });

export const projectId = Joi.number().required()
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT_NEED, errors);
  });

export const description = Joi.string().trim().min(5).max(10000)
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT_NEED, errors);
  });

export const needCount = Joi.number().required()
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT_NEED, errors);
  });


// for projectNeed update
export const typeUpdate = Joi.string().trim().min(1).max(200)
  .valid(ProjectNeedType.ITEM, ProjectNeedType.PEOPLE)
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT_NEED, errors);
  });

export const descriptionUpdate = Joi.string().trim().min(5).max(10000)
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT_NEED, errors);
  });

export const needCountUpdate = Joi.number()
  .error((errors) => {
    throw loadErrors(ModelName.PROJECT_NEED, errors);
  });
