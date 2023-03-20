import mongoose from 'mongoose';

export const init = () => {
    mongoose.connect('mongodb+srv://jsschool2023:pixion123@cluster0.jkwcbrz.mongodb.net/mraguz?retryWrites=true&w=majority')
}