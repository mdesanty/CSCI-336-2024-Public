document.addEventListener('DOMContentLoaded', function() {
  const turnRedBtn = document.getElementById('turn-red-btn');
  turnRedBtn.onclick = () => {
    /*
    * When you run this, note the order of the console output. Since the the promise is settled asynchronously,
    * the order of the output will be:
    * 'Here we go...'
    * 'All done!'
    * 'Success! It is red now'
    */
    console.clear();
    console.log('Here we go...');

    /*
    * There are two ways that we can handle the result of a promise:
    * 1. Using the .then() method with two arguments.
    * The .then() method can takes two arguments, a success callback and an error callback.
    * The success callback is called when the promise is resolved. It receives the value that the promise was resolved with as an argument.
    * The the error callback is called when the promise is rejected. It receives the value that the promise was rejected with as an argument.
    *
    * 2. Using the .then() and .catch() methods
    * In this scenario, we only use the success callback with the .then() method.
    * Then we use the .catch() method to handle the error callback.
    * The .catch() method is a shorthand for handling the error callback.
    * It is called when the promise is rejected.
    */
    // turnRed().then(
    //   function(result) {
    //     console.log(result);
    //   },
    //   function(error) {
    //     console.log(error.message);
    //   }
    // );

    turnRed().then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });

    console.log('All done!')
  }
});

const turnRed = () => {
  return new Promise(function(resolve, reject) {
    const title = document.getElementById('title');

    if(!title.classList.contains('bg-red')) {
      title.classList.remove('bg-green');
      title.classList.add('bg-red');
      resolve('Success! It is red now');
    }
    else {
      reject(new Error('Already red'));
    }
  });
}
