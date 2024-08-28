document.addEventListener('DOMContentLoaded', function() {
  getActivity();
});

const getActivity = () => {
  // Here is the documentation for the API we are using: https://github.com/cheatsnake/emojihub

  // Initialize the object.
  const xhr = new XMLHttpRequest();

  /*
  * Setup a callback function for onload. The onload callback is invoked when the response is ready.
  *
  * Here is an example of the body that comes back from a response from https://emojihub.yurace.pro/api/random
  * {
  *     "name": "british indian ocean territory",
  *     "category": "flags",
  *     "group": "flags",
  *     "htmlCode": [
  *         "&#127470;",
  *         "&#127476;"
  *     ],
  *     "unicode": [
  *         "U+1F1EE",
  *         "U+1F1F4"
  *     ]
  * }
  */
  xhr.onload = () => {
    const response = xhr.response;

    const emojiElement = document.getElementById('emoji');
    emojiElement.innerHTML = response.htmlCode[0];
  };

  // Specify the type of data contained in the reponse.
  xhr.responseType = 'json';

  // Use the open and send methods to send the request.
  xhr.open('GET', 'https://emojihub.yurace.pro/api/random');
  xhr.send();
}
