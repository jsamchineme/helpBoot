import Category from './model';
import response from 'src/http/response';
import { Response, Request } from 'express';

export const createCategory = async (req: Request, res: Response) => {
  const newCategory = await Category.create(req.body);

  return response.created(res, newCategory);
};

export const getCategories = async (req: Request, res: Response) => {
  const categories = await Category.findAll();

  return response.created(res, categories);
};