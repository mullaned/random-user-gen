let userFullName = document.querySelector('#fullname');
let userUserName = document.querySelector('#username');
let userEmail = document.querySelector('#email');
let userCity = document.querySelector('#city');
let userImage = document.querySelector('#avatar');

let url = 'https://randomuser.me/api/';

function getUser(){
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .catch(printError)
}


function handleErrors(res) {
    if(!res.ok){
        throw Error(res.status)
    }
    return res.json();
        
}

function parseJSON(data) {
    console.log(data.results[0]);
    let user = data.results[0]

    userImage.src = user.picture.medium;
    userFullName.innerHTML = user.name.first + ' ' + user.name.last;
    userUserName.innerHTML = user.login.username;
    userEmail.innerHTML = user.email;
    userCity.innerHTML = user.location.city;
}

function printError(error){
    console.log(error);
}


document.getElementById('btn').addEventListener('click', () => {
    getUser();
})

