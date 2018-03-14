/**
 * router main
 */
import * as Router from 'koa-router';
import { router as users } from '../api/users';

export const router = new Router();

router.use('/users', users.routes(), users.allowedMethods());