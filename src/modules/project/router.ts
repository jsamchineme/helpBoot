import { Router } from 'express';
import validateCreateProject from 'src/http/middlewares/requestValidations/createProject';
import validateProjectEdit from 'src/http/middlewares/requestValidations/editProject';
import wrapAsync from 'src/http/wrapAsync';
import { createProject, editProject, getProjects, getOneProject } from './controller';
import verifyToken from 'src/http/middlewares/auth/verifyToken';

const projectRouter = Router();

projectRouter.post('/',
  verifyToken,
  validateCreateProject,
  wrapAsync(createProject));

projectRouter.get('/',
  wrapAsync(getProjects));

projectRouter.get('/:projectId',
  wrapAsync(getOneProject));

projectRouter.put('/:projectId',
  verifyToken,
  validateProjectEdit,
  wrapAsync(editProject));

export default projectRouter;
