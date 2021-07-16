import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({


    url: String,


});

const postModel = mongoose.model("post", imageSchema);

export default postModel;