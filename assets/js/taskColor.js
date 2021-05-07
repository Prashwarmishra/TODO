{
    const categoryTags = document.querySelectorAll('.categ');
    
    categoryTags.forEach(tag => {
        let tagText = tag.querySelector('span').innerText.toLowerCase();
        
        if(tagText == 'work'){
            tag.style.background = 'black';
        }else if(tagText == 'cleaning'){
            tag.style.background = 'red';
        }else if(tagText == 'personal'){
            tag.style.background = 'indigo';
        }else if(tagText == 'school'){
            tag.style.background = 'green';
        }else if(tagText == 'other'){
            tag.style.background = 'blue';
        }
    });
}