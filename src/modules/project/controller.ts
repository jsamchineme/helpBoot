import Project from './model';
import response from 'src/http/response';
import { Response, Request } from 'express';

export const createProject = async (req: Request, res: Response) => {
  const newProject = await Project.create({
    ...req.body,
    visible: 0,
  });

  return response.created(res, newProject);
};

export const editProject = async (req: Request, res: Response) => {
  const project = await Project.findByPk(req.params.projectId);
  const updatedProject = await project.update({
    ...req.body,
    visible: Number(req.body.visible)
  });

  return response.created(res, updatedProject);
};