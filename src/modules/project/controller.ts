import Project from './model';
import response from 'src/http/response';
import { Response, Request } from 'express';
import httpException from 'src/http/httpException';
import { ERROR_CODES } from 'src/constants/response';

export const createProject = async (req: Request, res: Response) => {
  const newProject = await Project.create({
    ...req.body,
    visible: 0,
  });

  return response.created(res, newProject);
};

export const editProject = async (req: Request, res: Response) => {
  const project = await Project.findByPk(req.params.projectId);
  if (!project) {
    throw httpException.handle(ERROR_CODES.PRJ_01);
  }
  const updatedProject = await project.update({
    ...req.body,
    visible: Number(req.body.visible)
  });

  return response.created(res, updatedProject);
};

export const getProjects = async (req: Request, res: Response) => {
  const projects = await Project.findAll();

  return response.created(res, projects);
};