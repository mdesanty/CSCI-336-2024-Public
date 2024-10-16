document.addEventListener('DOMContentLoaded', function() {
  getCatFacts();
});

const getCatFacts = () => {
  fetch('https://meowfacts.herokuapp.com?count=10')
    .then(function(response) {
      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      else {
        return response.json();
      }
    })
    .then(function(data) {
      const factListElement = document.getElementById('cat-facts');
      data.data.forEach((fact) => {
        const factElement = document.createElement('li');
        factElement.textContent = fact;
        factListElement.appendChild(factElement);
      });

    })
    .catch(function(error) {
      alert(error);
    });
}