const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const password2 = document.getElementById('ConfirmPassword');

//show success outline and message
function showError(input, message) {
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small = formControl.querySelector('small');
    small.innerText=message;
}

//show success outline
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}


function isValidEmail(input){
    //this returns true if the input is email and false otherwise
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(!(re.test(String(input.value).toLowerCase()))){
        showError(input, 'Email is not valid');
    }

    else {
        showSuccess(input);
    }
}

//to conver to upper case

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//checking if any field is empty
function    checkRequired(inputarray) {
    inputarray.forEach(function(input) {
        if(input.value === ''){
            showError(input,`${getFieldName(input)} is required`);
        }

        else {
            showSuccess(input);
        }


    });

}


//check for input length 

function checkLength(input,min,max) {
    if (input.value.length < min) {
        showError(input,`${getFieldName(input)} must be atleast ${min} characters`)
    }

    else if(input.value.length > max) {
        showError(input,`${getFieldName(input)} must be less than ${max} characters`)
    }
}

//check is confirm password and password match

function isEqual(input1,input2){
    if(input1.value !== input2.value) {
        showError(input2, 'Confirm Password and Password DO NOT match!');
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault();
 
    checkRequired([username,email,password,password2]);

    checkLength(username,3,15);
    
    checkLength(password,6,25);

    isValidEmail(email);

    isEqual(password,password2);
})

