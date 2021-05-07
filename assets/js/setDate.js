{
    let dueDateTag = document.querySelectorAll('.task-due-date-stamp');
    dueDateTag.forEach(dateTag => {
        let date = dateTag.innerHTML.split(' ');
        dateTag.innerHTML = `<span><i class="far fa-calendar-alt" class="task-calender-icon" style="padding-right: 7px;"></i><span>
        ${date[0]}, ${date[2]}-${date[1]}-${date[3]}`;
    });
}