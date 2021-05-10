const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, 
    {
        timestamps: true,
    }
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;