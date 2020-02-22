import { Router } from 'express';
import validateCreateProject from 'src/http/middlewares/requestValidations/createProject';
import wrapAsync from 'src/http/wrapAsync';
import { createProject } from './controller';
import verifyToken from 'src/http/middlewares/auth/verifyToken';

const projectRouter = Router();

projectRouter.post('/',
  verifyToken,
  validateCreateProject,
  wrapAsync(createProject));

export default projectRouter;
