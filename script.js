// Handle showing and hiding login and signup forms
document.getElementById('loginBtn').addEventListener('click', function () {
  document.getElementById('loginForm').style.display = 'flex';
});

document.getElementById('signupLink').addEventListener('click', function () {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'flex';
});

document.getElementById('loginLink').addEventListener('click', function () {
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'flex';
});

// Login Form Submission
document.getElementById('login').addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Simulating backend login
  if (username && password) {
    alert('Logged in successfully');
    document.getElementById('loginForm').style.display = 'none';
  }
});

// Signup Form Submission
document.getElementById('signup').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;
  
  // Simulating backend signup
  if (email && newUsername && newPassword) {
    alert('Account created successfully');
    document.getElementById('signupForm').style.display = 'none';
  }
});
