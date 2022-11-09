// initializations
const api = 'https://icanhazdadjoke.com/';

const jokes = document.querySelector("#joke");
const updateJoke = document.querySelector("#get-joke");
const err = document.querySelector('#err');
// initailized xmlhttp request
const xhr = new XMLHttpRequest();

const showJoke = (joke) => {
    jokes.innerText = joke;
}

// show error ----

const showErr = (error) => {
    err.style.display = 'block';
    jokes.innerText = error;
}

const getJokes = () => {

    xhr.open('GET', api);
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.responseType = 'json';

    // console.log(xhr);

    // success callback function sent by onload-----
    const successMessage = () => {
        const responseJoke = xhr.response.joke;
        // console.log(responseJoke.joke);                                                              
        showJoke(`${responseJoke}`);
    }
    xhr.onload = successMessage;

    // on error ocuured -------
    xhr.onerror = function (){
        // console.error(`error dispute.....`);
        showErr(`Something is wrong......`);
    }



    // send method show success message
    xhr.send();
}

// getJokes();
// event on the btn 
updateJoke.addEventListener('click', () => {
    getJokes();
});



