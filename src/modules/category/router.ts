import { Router } from 'express';
import wrapAsync from 'src/http/wrapAsync';
import { createCategory, getCategories } from './controller';
import verifyToken from 'src/http/middlewares/auth/verifyToken';

const categoryRouter = Router();

categoryRouter.post('/',
  verifyToken,
  wrapAsync(createCategory));

categoryRouter.get('/',
  verifyToken,
  wrapAsync(getCategories));

export default categoryRouter;
