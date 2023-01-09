'use strict'

// const username = 'Joe';
// window.username = username;
const username = {
    name: 'Joe',
    email: 'joe@example.com'
}

username.name = 'Andrew';
username.email = 'andrew@example.com';

function init() {
    if(true) {
        // var email = 'joe@example.com';
        // let email = 'joe@example.com';
        // document.getElementById('output').innerHTML = email;
    }
    document.getElementById('output').innerHTML = `${username.name} (${username.email})`
}

init();

// var = global scope
// let = inside a function, property can be changed
// const = cannot change property, once declared.
