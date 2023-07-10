let form = document.querySelector('#form')
let username = document.querySelector('.username')
let email = document.querySelector('.email')
let password = document.querySelector('.password')
let date = document.querySelector('#date')
let error = document.querySelector('.error')

form.addEventListener('submit', (events) => {
    
    if(!Validition()){
        events.preventDefault();
    }
});

function Validition() {
    let userval = username.value.trim();
    let emailval = email.value.trim();
    let passwordval = password.value.trim();
    let dateval = date.value;
    let done = true;

    // ----------------------------uservalidation
    if (userval == '') {
        done = false;
        seterror(username, 'enter the valdition name');
    }
    else {
        setsucces(username);
    }
    // ----------------------------email validation
    if (emailval == '') {
        done = false;
        seterror(email, 'enter email for valdition');
    }
    else {
        setsucces(email);
    }
    // ----------------------------password
    if (passwordval == '') {
        done = false;
        seterror(password, 'enter the password');
    }
    else if (passwordval.length < 7) {
        done = false;
        seterror(password, 'use must more than 7 char');
    }
    else {
        setsucces(password);
    }
    // ----------------------------date validation
    if (dateval == '') {
        seterror(date, 'fill the date');
        done = false;
    }
    else {
        setsucces(date);
    }

}

function seterror(element, message) {
    let inputset = element.parentElement;
    let errorelement = inputset.querySelector('.error');

    errorelement.innerText = message;
    // add classname in inputset
    inputset.classList.add('error');
    inputset.classList.remove('succes');
}

function setsucces(element) {
    let inputset = element.parentElement;
    let errorelement = inputset.querySelector('.error');

    errorelement.innerText = '';
    // add classname in inputset
    inputset.classList.add('succes');
    inputset.classList.remove('error');
}

// ------------------------------navigation function

let list = document.querySelector('nav ul');
let menuline = document.querySelector('.menuline');
menuline.addEventListener('click',() => {
        list.classList.toggle('showmenu')
});