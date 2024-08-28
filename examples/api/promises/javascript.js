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

    turnRed().then(
      function(result) {
        console.log(result);
      },
      function(error) {
        console.log(error.message);
      }
    );
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
