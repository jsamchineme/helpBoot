import * as Joi from '@hapi/joi';
import {
  typeUpdate as type,
  descriptionUpdate as description,
  needCountUpdate as needCount,
} from './validationFields/projectNeed';

const schema = Joi.object({
  type,
  description,
  needCount,
});

export default schema;
