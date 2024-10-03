document.addEventListener('DOMContentLoaded', function() {
  const courseSelect = document.getElementById('course-select');
  courseSelect.addEventListener('change', function() {
    const defaultOption = document.getElementById('default-course-option');

    if(defaultOption)
      courseSelect.removeChild(defaultOption);
  });

  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();
  event.stopPropagation();

  // Get the values individually:
  console.log(`Username: ${document.getElementsByName('username')[0].value}`);
  console.log(`Email: ${document.getElementsByName('email')[0].value}`);
  console.log(`First name: ${document.getElementsByName('firstName')[0].value}`);
  console.log(`Last name: ${document.getElementsByName('lastName')[0].value}`);
  console.log(`course: ${document.getElementsByName('course')[0].value}`);
  console.log(`Love it: ${document.getElementsByName('loveThisCourse')[0].value}`);

  // There may not always be a checked radio button. If there isn't, we don't want to call .value on undefined.
  const attendeeType = document.querySelector('input[name="attendeeType"]:checked');
  if(attendeeType)
    console.log(`Attendee type: ${attendeeType.value}`);

  // Get all of the form data as an objct:
  const form = document.getElementById('my-form');
  const rawData = new FormData(form);
  const data = Object.fromEntries(rawData.entries());

  console.log(data);
}