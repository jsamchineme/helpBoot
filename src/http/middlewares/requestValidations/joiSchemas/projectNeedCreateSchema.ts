import * as Joi from '@hapi/joi';
import {
  type,
  projectId,
  description,
  needCount,
} from './validationFields/projectNeed';


const schema = Joi.object({
  type,
  projectId,
  description,
  needCount,
});


export default schema;
