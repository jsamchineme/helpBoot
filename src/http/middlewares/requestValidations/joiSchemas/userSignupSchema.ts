import * as Joi from '@hapi/joi';
import {
  email,
  password,
  firstname,
  lastname,
  address,
  shortBio,
  locationCity,
  locationState,
} from './validationFields/user';


const schema = Joi.object({
  email,
  password,
  firstname,
  lastname,
  address,
  shortBio,
  locationCity,
  locationState,
});


export default schema;
