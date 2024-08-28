document.addEventListener('DOMContentLoaded', function() {
  const courseSelect = document.getElementById('course-select');
  courseSelect.addEventListener('change', function() {
    const defaultOption = document.getElementById('default-course-option');

    if(defaultOption)
      courseSelect.removeChild(defaultOption);
  });

  const form = document.getElementById('my-form');
  form.addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
  const form = event.target;

  event.preventDefault();
  event.stopPropagation();

  if(!form.checkValidity()) {
    console.log('Oops. Cannot get the data from an invalid form.');
  }
  else {
    const rawData = new FormData(event.target);
    const data = Object.fromEntries(rawData.entries());

    console.log(data);
  }

  form.classList.add('was-validated');
}