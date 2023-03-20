import Robot from '../models/robot.model';

export const getAllRobots = async (req, res) => {
    const allRobots = await Robot.find();

    res.json(allRobots);
}