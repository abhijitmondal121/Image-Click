let clface=document.querySelector('.closed');
let opface=document.querySelector('.open');

clface.addEventListener('click',() => {
    if(opface.classList.contains('open')){
        opface.classList.add('active');
        clface.classList.remove('active');
    }
});

opface.addEventListener('click',() => {
    if(clface.classList.contains('closed')){
        clface.classList.add('active');
        opface.classList.remove('active');
    }
});
