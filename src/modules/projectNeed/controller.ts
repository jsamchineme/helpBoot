import ProjectNeed from './model';
import response from 'src/http/response';
import { Response, Request } from 'express';
import httpException from 'src/http/httpException';
import { ERROR_CODES } from 'src/constants/response';

export const createProjectNeed = async (req: Request, res: Response) => {
  const newProjectNeed = await ProjectNeed.create(req.body);

  return response.created(res, newProjectNeed);
};

export const editProjectNeed = async (req: Request, res: Response) => {
  const projectNeed = await ProjectNeed.findByPk(req.params.projectNeedId);
  if (!projectNeed) {
    throw httpException.handle(ERROR_CODES.PND_01);
  }

  const updatedProjectNeed = await projectNeed.update({
    ...req.body,
    // I am explicity making sure we don't override this field from an update request
    // We could handle this in the input validation making sure certain unallowed fields are caught there
    projectId: projectNeed.projectId,
    needCount: Number(req.body.needCount) || projectNeed.needCount,
  });

  return response.created(res, updatedProjectNeed);
};