import * as Joi from '@hapi/joi';
import {
  title,
  shortDescription,
  fullDescription,
  location,
  startDate,
  endDate,
} from './validationFields/project';


const schema = Joi.object({
  title,
  shortDescription,
  fullDescription,
  location,
  startDate,
  endDate,
});


export default schema;
