/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router, Request, Response, NextFunction } from 'express';
import { listNav } from '../../service';

export const router: Router = Router();

router.get('/api/nav',
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await listNav(req);

    res.status(200).send({
      payload: result,
    });
  }
);
