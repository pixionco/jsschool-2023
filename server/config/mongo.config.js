import mongoose from 'mongoose';

export const init = () => {
    mongoose.connect(process.env.MONGO_URL)
}