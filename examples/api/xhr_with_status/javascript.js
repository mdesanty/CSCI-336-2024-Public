document.addEventListener('DOMContentLoaded', function() {
  getCatFact();
});

const getCatFact = () => {
  // Initialize the object.
  const xhr = new XMLHttpRequest();

  // Setup a callback function for onload. The onload callback is invoked when the response is ready.
  xhr.onload = () => {
    const response = xhr.response;
    console.log(xhr.status);
    console.log(response);

    if(xhr.status === 200) {
      const questionElement = document.getElementById('cat-fact');
      questionElement.innerHTML = response.data[0];
    }
    else {
      alert(`Bad request - ${xhr.status}`);
    }
  };

  /*
  * We can also setup a callback function for onerror.
  * The onerror callback is invoked when there is an error with the request.
  * This is important to catch things like networks errors when the request cannot be made.
  */
  xhr.onerror = () => {
    alert('Error with request');
  };

  // Specify the type of data contained in the reponse.
  xhr.responseType = 'json';

  // Use the open and send methods to send the request.
  xhr.open('GET', 'https://meowfacts.herokuapp.com/');
  xhr.send();
}
