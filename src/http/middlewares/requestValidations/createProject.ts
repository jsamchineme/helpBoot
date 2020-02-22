import httpException from 'src/http/httpException';
import createProjectSchema from './joiSchemas/createProjectSchema';
import generateCustomErrors from './joiSchemas/helpers/generateCustomErrors';

/**
 * @param  {Object} req - the request object
 * @param  {Object} res - the response object
 * @param  {Function} next - switch to the next route middleware
 * @return {*} - returns void or next()
 */
const validateUserLogin = async (req, res, next) => {
  try {
    await createProjectSchema.validate(req.body);
    next();
  } catch (errors) {
    return next(generateCustomErrors(errors, httpException));
  }
};

export default validateUserLogin;
