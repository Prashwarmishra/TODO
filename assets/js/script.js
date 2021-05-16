/**************************Variable declaration****************************/
const tasks = document.querySelectorAll('li');
const allTasksTag = document.querySelector('.all-tasks');
const completedTasksTag = document.querySelector('.completed-tasks');
const uncompletedTasksTag = document.querySelector('.uncompleted-tasks');

/**************************Event listeners**********************************/
allTasksTag.addEventListener('click', showAllTasks);
completedTasksTag.addEventListener('click', showCompletedTasks);
uncompletedTasksTag.addEventListener('click', showUncompletedTasks);

/***************************Function declaration*****************************/ 

//function to update tasks left
function updateTasksLeft(){
    let count = 0;

    //loop through all tasks and count those which don't have the class selected
    tasks.forEach(task => {
        let selected = task.querySelector('.selected');
        if(selected == undefined){
            count++;
        }
    });

    //update tasks left
    document.querySelector('.task-left').innerHTML = count;
}

updateTasksLeft();

//function to show all tasks
function showAllTasks(){

    //loop through all the li and set display to grid
    tasks.forEach(task => {
        task.style.display = 'grid';
    });
}

//function to show completed tasks
function showCompletedTasks(){

    //loop through all the tasks and set display to grid for those which don't have class selected
    tasks.forEach(task => {
        let selected = task.querySelector('.selected');
        if(selected == undefined){
            task.style.display = 'none';
        }else{
            task.style.display = 'grid';
        }
    });
}

//function to show uncompleted tasks
function showUncompletedTasks(){

    //loop through all the tasks and set display to grid for those which don't have class selected
    tasks.forEach(task => {
        let selected = task.querySelector('.selected');
        if(selected == undefined){
            task.style.display = 'grid';
        }else{
            task.style.display = 'none';
        }
    });
}
