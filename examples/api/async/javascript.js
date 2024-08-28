document.addEventListener('DOMContentLoaded', function() {
  appendChild('1');
  appendChildAsync('2');
  appendChild('3');
  appendChild('4');
  appendChild('5');
});

function appendChild(text) {
  const textDiv = document.getElementById('text');

  const newChild = document.createElement('div');
  newChild.innerHTML = text;

  textDiv.appendChild(newChild);
}

function appendChildAsync(text) {
  setTimeout(() => { appendChild(text) }, 1);
}