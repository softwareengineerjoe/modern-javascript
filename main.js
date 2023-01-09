'use strict'

// const username = 'Joe';
// window.username = username;
// const username = {
//     name: 'Joe',
//     email: 'joe@example.com'
// }

// username.name = 'Andrew';
// username.email = 'andrew@example.com';

// EPISODE 1 - let vs const

// function init() {
//     if(true) {
//         // var email = 'joe@example.com';
//         // let email = 'joe@example.com';
//         // document.getElementById('output').innerHTML = email;
//     }
//     document.getElementById('output').innerHTML = `${username.name} (${username.email})`
// }

// init();

// var = global scope
// let = inside a function, property can be changed
// const = cannot change property, once declared.


// EPISODE 2 - Arrow Functions Point the Way

// const init = () => {
//     document.getElementById('output').innerHTML = `${username.name} (${username.email})`
// }


// init();


// function nameString() {
//     return `${username.name} (${username.email})`
// }

// const nameString = name => `${name} (${username.email})`

// document.getElementById('output').innerHTML = nameString('Andrew');

let users = [
    {
        name: 'Joe',
        username: 'joe@example.com'
    },
    {
        name: 'Andrew',
        username: 'andrew@example.com'
    }
];

let names = [];

// users.forEach(function(user){
//     // do something with that user object
//     names.push(user.name);
// });

users.forEach(user => names.push(user.name));

document.getElementById('output').innerHTML = names.join(', ');

document.getElementById('btn').addEventListener('click', function() {

    const getDetails = () => {
    console.log(this);

        return `The button id is ${this.getAttribute('id')}`;
    }

    document.getElementById('output').innerHTML = getDetails();
});