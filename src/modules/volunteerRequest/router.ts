import { Router } from 'express';
import wrapAsync from 'src/http/wrapAsync';
import { createVolunteerRequest, editVolunteerRequest } from './controller';
import verifyToken from 'src/http/middlewares/auth/verifyToken';

const volunteerRequestRouter = Router();

volunteerRequestRouter.post('/',
  verifyToken,
  wrapAsync(createVolunteerRequest));

volunteerRequestRouter.put('/:volunteerRequestId',
  wrapAsync(editVolunteerRequest));

export default volunteerRequestRouter;
