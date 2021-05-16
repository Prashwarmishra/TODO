{   
    //select all the checkboxes
    let checkBoxes = document.querySelectorAll('.task-checkbox');

    //delete button
    let deleteTaskButton = document.querySelector('#delete-task-button');

    //current count of boxes checked
    let boxesChecked = 0;

    //function to enable or disable delete button
    function disableButton(elem){
        
        if(elem){
            deleteTaskButton.disabled = true;
            deleteTaskButton.classList.add('disabled');
        }else{
            deleteTaskButton.disabled = false;
            deleteTaskButton.classList.remove('disabled');
        }
    }

    disableButton(true);

    //add click event listener for all the checkboxes on the page
    checkBoxes.forEach(checkBox => {
        checkBox.addEventListener('click', function(){
            let checkBoxInput = checkBox.querySelector('input');

            //if checkbox is checked
            if(checkBoxInput.checked){
                //increment the count of boxes by 1
                boxesChecked++;
                let taskInfo = checkBox.nextElementSibling.querySelectorAll('span');
                taskInfo.forEach(task => {
                    task.classList.add('selected');
                });
            }else if(!checkBoxInput.checked && boxesChecked > 0){
                boxesChecked--;
                let taskInfo = checkBox.nextElementSibling.querySelectorAll('span');
                taskInfo.forEach(task => {
                    task.classList.remove('selected');
                });
            }
            if(boxesChecked == 0){
                disableButton(true);
            }else{
                disableButton(false);
            }
            updateTasksLeft();
        });
    });   
}