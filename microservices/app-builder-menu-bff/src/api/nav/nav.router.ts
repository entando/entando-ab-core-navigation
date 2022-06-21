/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router, Request, Response, NextFunction } from 'express';
import { keycloak } from '../../middleware/keycloak';
import { listNav } from '../../service';

export const router: Router = Router();

router.get('/nav',
  keycloak.protect(),
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await listNav();

    res.status(200).send({
      payload: result,
    });
  }
);
