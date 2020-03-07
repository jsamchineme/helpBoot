import VolunteerRequest from './model';
import response from 'src/http/response';
import { Response, Request } from 'express';
import httpException from 'src/http/httpException';
import { ERROR_CODES } from 'src/constants/response';
import ProjectNeed from 'src/modules/projectNeed/model';

export const createVolunteerRequest = async (req: Request, res: Response) => {
  const projectNeed = await ProjectNeed.findByPk(req.body.projectNeedId);
  if (!projectNeed) {
    throw httpException.handle(ERROR_CODES.PND_01);
  }
  const newVolunteerRequest = await VolunteerRequest.create({
      needId: projectNeed.id,
      userId: (req as any).decoded.id,
      quantity: req.body.quantity
    });

  return response.created(res, newVolunteerRequest);
};

export const editVolunteerRequest = async (req: Request, res: Response) => {
  const volunteerRequest = await VolunteerRequest.findByPk(req.params.volunteerRequestId);
  if (!volunteerRequest) {
    throw httpException.handle(ERROR_CODES.VRQ_01);
  }

  const updatedVolunteerRequest = await volunteerRequest.update({
    needId: volunteerRequest.needId,
    userId: volunteerRequest.userId,
    quantity: Number(req.body.quantity) || volunteerRequest.quantity,
  });

  return response.created(res, updatedVolunteerRequest);
};