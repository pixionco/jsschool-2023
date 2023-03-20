import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import * as mongoConfig from './config/mongo.config';
import routesConfig from './config/routes.config';
import expressConfig from './config/express.config';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoConfig.init();
routesConfig(app);
expressConfig(app);