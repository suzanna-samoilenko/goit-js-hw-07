const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget.elements;

  const email = form.email.value.trim();
  const password = form.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formElements = {
    email: email,
    password: password,
  };

  console.log(formElements);

  event.target.reset();
}
