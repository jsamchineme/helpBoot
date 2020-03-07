import { Router } from 'express';
import validateCreateProjectNeed from 'src/http/middlewares/requestValidations/createProjectNeed';
import validateProjectNeedEdit from 'src/http/middlewares/requestValidations/editProjectNeed';
import wrapAsync from 'src/http/wrapAsync';
import { createProjectNeed, editProjectNeed } from './controller';
import verifyToken from 'src/http/middlewares/auth/verifyToken';

const projectRouter = Router();

projectRouter.post('/',
  verifyToken,
  validateCreateProjectNeed,
  wrapAsync(createProjectNeed));

projectRouter.put('/:projectNeedId',
  validateProjectNeedEdit,
  wrapAsync(editProjectNeed));

export default projectRouter;
