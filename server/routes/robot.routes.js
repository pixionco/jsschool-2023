import express from 'express';
const router = express.Router();

import * as RobotCtrl from '../controllers/robot.ctrl';

router.get('/', RobotCtrl.getAllRobots);

export default router;
