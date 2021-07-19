import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    CardNumber: {type: String, required: true},
    ExpDate: {type: String, required: true},
    CVV: {type: String, required: true},

})

export default mongoose.model('Post', Post)