import * as Joi from '@hapi/joi';
import {
  titleUpdate as title,
  shortDescriptionUpdate as shortDescription,
  fullDescriptionUpdate as fullDescription,
  locationUpdate as location,
  startDateUpdate as startDate,
  endDateUpdate as endDate,
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
