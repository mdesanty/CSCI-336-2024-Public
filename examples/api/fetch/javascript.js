document.addEventListener('DOMContentLoaded', function() {
  getEmoji();
});

const getEmoji = () => {
  fetch('https://emojihub.yurace.pro/api/random')
    .then(function(response) {
      /*
      * Here is the documentation for the API we are using: https://github.com/cheatsnake/emojihub
      *
      * The .json() method of the response returns a Promise that resolves with a result of the response body
      * parsed as JSON.
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
      *
      * So in our next call to .then when the .json() promise resolves, the paramter for that method will be a
      * JavaScript objects with the data above. We will call data.htmlCode[0] to get the HTML of the emoji.
      *
      * We include [0] because this is an array that can have multiple HTML codes for various versions of the emoji
      * and we only want the first.
      */
      return response.json()
    })
    .then(function(data) {
      const emojiElement = document.getElementById('emoji');
      emojiElement.innerHTML = data.htmlCode[0];
    });
}
