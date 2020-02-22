import httpException from 'src/http/httpException';
import projectNeedCreateSchema from './joiSchemas/projectNeedCreateSchema';
import generateCustomErrors from './joiSchemas/helpers/generateCustomErrors';

/**
 * @param  {Object} req - the request object
 * @param  {Object} res - the response object
 * @param  {Function} next - switch to the next route middleware
 * @return {*} - returns void or next()
 */
const validateProjectNeedCreate = async (req, res, next) => {
  try {
    await projectNeedCreateSchema.validate(req.body);
    next();
  } catch (errors) {
    return next(generateCustomErrors(errors, httpException));
  }
};

export default validateProjectNeedCreate;
