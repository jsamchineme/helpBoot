import Project from './model';
import response from 'src/http/response';
import { Response, Request } from 'express';

export const createProject = async (req: Request, res: Response) => {
  const newProject = await Project.create(req.body);

  return response.created(res, newProject);
};