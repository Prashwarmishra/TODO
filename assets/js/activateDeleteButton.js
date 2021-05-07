{
    let checkBoxes = document.querySelectorAll('.task-checkbox');
    let deleteTaskButton = document.querySelector('#delete-task-button');

    let boxesChecked = 0;

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

    checkBoxes.forEach(checkBox => {
        checkBox.addEventListener('click', function(){
            let checkBoxInput = checkBox.querySelector('input');
            if(checkBoxInput.checked){
                boxesChecked++;
                let taskInfo = checkBox.nextElementSibling.querySelectorAll('span');
                taskInfo.forEach(task => {
                    task.style.textDecoration = "line-through";
                });
            }else if(!checkBoxInput.checked && boxesChecked > 0){
                boxesChecked--;
                let taskInfo = checkBox.nextElementSibling.querySelectorAll('span');
                taskInfo.forEach(task => {
                    task.style.textDecoration = "none";
                });
            }
            if(boxesChecked == 0){
                disableButton(true);
            }else{
                disableButton(false);
            }
        });
    });   
}