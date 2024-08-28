document.addEventListener('DOMContentLoaded', function() {
  getActivity();
});

const getActivity = () => {
  // Initialize the object.
  const xhr = new XMLHttpRequest();

  // Setup a callback function for onload. The onload callback is invoked when the response is ready.
  xhr.onload = () => {
    const response = xhr.response;
    console.log(xhr.status);
    console.log(response);

    if(xhr.status === 200) {
      const questionElement = document.getElementById('question');
      const answerElement = document.getElementById('answer');

      questionElement.innerHTML = response[0].question;
      answerElement.innerHTML = response[0].answer;
    }
    else {
      alert(`Error with request`);
    }
  };

  // Specify the type of data contained in the reponse.
  xhr.responseType = 'json';

  // Use the open and send methods to send the request.
  xhr.open('GET', 'http://jservice.io/api/random');
  xhr.send();
}
