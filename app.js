let form = document.querySelector('form');

const pattern = /^[a-zA-Z]{6,12}$/

form.password.addEventListener('keyup',check);
form.email.addEventListener('keyup',check);
form.username.addEventListener('keyup',check);

function check(){
    if(pattern.test(form.username.value)){
        form.username.setAttribute('class','succes')
    }else{
        form.username.setAttribute('class','error');
    }
}