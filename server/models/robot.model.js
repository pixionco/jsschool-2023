import mongoose from 'mongoose';

const Robot = mongoose.model(
    'Robot',
    {
        name: String
    }
);

export default Robot;