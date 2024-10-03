document.addEventListener('DOMContentLoaded', function() {
  const courseSelect = document.getElementById('course-select');
  courseSelect.addEventListener('change', function() {
    const defaultOption = document.getElementById('default-course-option');

    if(defaultOption)
      courseSelect.removeChild(defaultOption);
  });

  document.getElementById('first-name-input').addEventListener('input', function() {
    this.classList.remove('is-invalid');
  });

  document.getElementById('my-form').addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();
  event.stopPropagation();

  if(!checkForm()) {
    console.log('Oops. Cannot get the data from an invalid form.');
  }
  else {
    const rawData = new FormData(event.target);
    const data = Object.fromEntries(rawData.entries());

    console.log(data);
  }
}

function checkForm() {
  let isValid = false;

  const firstNameInput = document.getElementById('first-name-input');
  const firstName = firstNameInput.value;
  const firstNameFeedback = document.getElementById('first-name-feedback');

  if(firstName == '') {
    firstNameFeedback.innerHTML = 'is required';
    firstNameInput.classList.add('is-invalid');
    firstNameInput.classList.remove('is-valid');
  }
  else if(firstName.length > 20) {
    firstNameFeedback.innerHTML = 'is too long (maximum length 20)';
    firstNameInput.classList.add('is-invalid');
    firstNameInput.classList.remove('is-valid');
  }
  else {
    isValid = true;
    firstNameInput.classList.remove('is-invalid');
    firstNameInput.classList.add('is-valid');
  }

  return isValid;
}