document.getElementById('action-btn').addEventListener('click', function() {
  this.textContent = "Clicked!";
  this.style.backgroundColor = "green";
});

document.getElementById('email').addEventListener('input', function() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailError = document.getElementById('email-error');

  if (emailRegex.test(this.value)) {
    emailError.style.display = 'none';
  } else {
    emailError.textContent = 'Please enter a valid email address.';
    emailError.style.display = 'block';
  }
});

document.getElementById('password').addEventListener('input', function() {
  const passwordError = document.getElementById('password-error');
  const passwordValue = this.value;

  if (passwordValue.length >= 8) {
    passwordError.style.display = 'none';
  } else {
    passwordError.textContent = 'Password must be at least 8 characters long.';
    passwordError.style.display = 'block';
  }
});

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  let formValid = true;

  // Name validation
  if (!name.value.trim()) {
    document.getElementById('name-error').textContent = 'Name is required.';
    document.getElementById('name-error').style.display = 'block';
    formValid = false;
  } else {
    document.getElementById('name-error').style.display = 'none';
  }

  // Email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.value)) {
    document.getElementById('email-error').textContent = 'Please enter a valid email address.';
    document.getElementById('email-error').style.display = 'block';
    formValid = false;
  } else {
    document.getElementById('email-error').style.display = 'none';
  }

  // Password validation
  if (password.value.length < 8) {
    document.getElementById('password-error').textContent = 'Password must be at least 8 characters long.';
    document.getElementById('password-error').style.display = 'block';
    formValid = false;
  } else {
    document.getElementById('password-error').style.display = 'none';
  }

  // Submit the form if everything is valid
  if (formValid) {
    alert("Form Submitted!");
  }
});
