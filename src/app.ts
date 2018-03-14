/**
 * app main
 */
import * as Koa from 'koa';
import * as postBody from 'koa-body';
import * as cors from 'koa2-cors';

import { logger } from './middleware/logger';
import { router } from './route/index';

const app = new Koa();

// allow cross domain
app.use(cors({ origin: '*' }));

// 
app.use(postBody());

app.use(logger);

// route
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);