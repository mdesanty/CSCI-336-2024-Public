document.addEventListener('DOMContentLoaded', function() {
  getDadJoke();
});

const getDadJoke = () => {
  // Here is the documentation for the API we are using: https://github.com/DadJokes-io/Dad_Jokes_API

  // Initialize the object.
  const xhr = new XMLHttpRequest();

  /*
  * Setup a callback function for onload. The onload callback is invoked when the response is ready.
  *
  * Here is an example of the body that comes back from a response from https://icanhazdadjoke.com
  * {
  *   id: '3wPfFYorWvc',
  *   joke: 'What do you call a snake who builds houses? A boa constructor!',
  *   status: 200
  * }
  */
  xhr.onload = () => {
    const response = xhr.response;
    console.log(response);

    const jokeElement = document.getElementById('joke');
    jokeElement.innerHTML = response.joke;
  };

  // Specify the type of data contained in the reponse.
  xhr.responseType = 'json';

  // Use the open and send methods to send the request.
  xhr.open('GET', 'https://icanhazdadjoke.com');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();
}
