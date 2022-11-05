// initializations
const api = 'https://icanhazdadjoke.com/';

const jokes = document.querySelector("#joke");
const updateJoke = document.querySelector("#get-joke");

// initailized xmlhttp request
const xhr = new XMLHttpRequest();



const getJokes = () => {

    xhr.open('GET', api);
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.responseType = 'json';

    console.log(xhr);

    // success callback function sent by onload-----
    const successMessage = () => {
        console.log('success....')
    }
    xhr.onload = successMessage;
    // send method show success message
    xhr.send();
}

getJokes();



