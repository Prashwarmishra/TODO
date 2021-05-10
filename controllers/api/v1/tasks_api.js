const Task = require('../../../models/task');
const User = require('../../../models/user');


module.exports.addTask = async function(req, res){
    try {
        let user = await User.findById(req.user.id);
        if(user){
            let task = await Task.create({
                description: req.body.description,
                category: req.body.category,
                dueDate: req.body.dueDate,
                user: req.user._id,
            });
            
            user.tasks.push(task);
            user.save();
            return res.status(200).json({
                message: 'Task created Successfully',
                task: task,
            });
        }else{
            return res.status(422).json({
                message: 'Unauthorized',
            });
        }

    } catch (error) {
        console.log('Error in adding todo:', error);
        return res.status(500).json({
            message: 'Internal Server Error',
        });
    }
}

module.exports.getTodo = async function(req, res){
    try {
        let tasks = await User.findById(req.user.id).populate('tasks');
        return res.status(200).json({
            message: 'Tasks fetched successfully!',
            data: {
                tasks: tasks,
            }
        });
    } catch (error) {
        console.log('Error in fetching todo:', error);
        return res.status(500).json({
            message: 'Internal Server Error',
        });
    }
}

module.exports.updateTask = async function(req, res){
    try {
        let task = await Task.findById(req.params.id);
        
        if(task.user == req.user.id){
            if(task){
                task.description = req.body.new_description;
                task.dueDate = req.body.new_dueDate;
                task.category = req.body.new_category;
                task.save();
            }
            return res.status(200).json({
                message: 'Task updated successfully',
            });
        }
    } catch (error) {
        console.log('Error in deleting task:', error);
        return res.status(500).json({
            message: 'Internal Server Error',
        });
    }
}

module.exports.deleteTask = async function(req, res){
    try {
        let task = await Task.findById(req.params.id);
        console.log(req.params.id);
        if(req.user.id == task.user){
            task.remove();
            await User.findByIdAndUpdate(req.user.id, {$pull: {tasks: req.params.id}});

            return res.status(200).json({
                message: 'Task deleted Successfully',
            });
        }else{
            return res.status(422).json({
                message: 'Unauthorized',
            });
        } 
    } catch (error) {
        console.log('Error in deleting task:', error);
        return res.status(500).json({
            message: 'Internal Server Error',
        });
    }
    
}