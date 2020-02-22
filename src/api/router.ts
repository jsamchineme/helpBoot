import { Router } from 'express';
import authRouter from 'src/modules/auth/router';
import projectRouter from 'src/modules/project/router';
import projectNeedRouter from 'src/modules/projectNeed/router';
import categoryRouter from 'src/modules/category/router';

const baseRouter = Router();

baseRouter.use('/auth', authRouter);
baseRouter.use('/projects', projectRouter);
baseRouter.use('/projectNeeds', projectNeedRouter);
baseRouter.use('/categories', categoryRouter);

export default baseRouter;
