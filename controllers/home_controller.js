const Task = require('../models/task');

//controller for rendering home page
module.exports.home = async function(req, res){
    try {

        //find all the tasks in database
        let tasks = await Task.find({});

        //render the home page with the found tasks
        return res.render('home', {
            title: 'TODO',
            tasks: tasks,
        });
    } catch (error) {

        //if error, console the error and return
        console.log('Error in rendering home page: ', err);
        return res.redirect('back');
    }
};


//controller for adding task
module.exports.addTask = async function(req, res){
    try {
        //create a task
        let task = await Task.create({
            description: req.body.description,
            category: req.body.category,
            dueDate: req.body.dueDate,
        });

        //redirect back to the page if task is created
        return res.redirect('back');
    } catch (error) {

        //if error, console the error
        console.log('Error in adding task: ', error);
        return res.redirect('back');
    }
}

//controller for deleting tasks
module.exports.deleteTask = async function(req, res){

    let toBeDeletedItems = req.body.task;
    
    //check if only 1 task is to be deleted
    if(typeof(toBeDeletedItems) == 'string'){

        //find the task by id and delete
        await Task.findByIdAndDelete(toBeDeletedItems);

        //else check if multiple tasks have to to deleted
    }else if(typeof(toBeDeletedItems) == 'object'){
        
        //find each task in the array by id and delete
        toBeDeletedItems.forEach(async item => {
            await Task.findByIdAndDelete(item);
        });
    }

    //redirect back
    return res.redirect('back');
}
