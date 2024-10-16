document.addEventListener('DOMContentLoaded', function() {
  getDadJoke();
});

const getDadJoke = () => {
  fetch('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
    .then(function(response) {
      /*
      * Like with the XHR example, we need to check if the response was successful.
      * the response.ok property is a boolean value that indicates whether the response was successful (status in the range 200-299) or not.
      *
      * We could also check the response.status property, but response.ok is a more convenient way to check if the request was successful.
      * If we wanted to check the status, we could do something like this:
      * if(response.status !== 200) {...}
      */
      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      else {
        /*
        * Here is the documentation for the API we are using: https://github.com/DadJokes-io/Dad_Jokes_API
        *
        * The .json() method of the response returns a Promise that resolves with a result of the response body
        * parsed as JSON.
        *
        * Here is an example of the body that comes back from a response from https://icanhazdadjoke.com
        * {
        *   id: '3wPfFYorWvc',
        *   joke: 'What do you call a snake who builds houses? A boa constructor!',
        *   status: 200
        * }
        *
        * So in our next call to .then when the .json() promise resolves, the paramter for that method will be a
        * JavaScript objects with the data above. We will call data.joke to get the text of the joke payload.
        */
        return response.json();
      }
    })
    .then(function(data) {
      const jokeElement = document.getElementById('joke');
      jokeElement.innerHTML = data.joke;
    })
    .catch(function(error) {
      alert(error);
    });
}
