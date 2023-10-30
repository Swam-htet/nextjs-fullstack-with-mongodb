import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    title:{
        required: true,
        type: String,
    },
    description:{
        required: true,
        type: String,
    },
    completed:{
        required: true,
        type: Boolean,
    },
    user_id:{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

export default mongoose.model('Todo', todoSchema);