const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submit = document.querySelector('submit');

submit.addEventListener('click', (event) =>{
    event.preventDefault();
//USERNAME.VALIDATIOM
if(username .Value.train() == ""){
    error(user,'username can not be empty');

    
}else{
    success(username);
}

});

function error(element,msg){
    element.style.border = '3px solid read';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = msg;
    p.style.visiblity = 'visible;'
}



function success(element){
    element.style.border = '3px solid read';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.style. visiblity = 'hidden'
}


