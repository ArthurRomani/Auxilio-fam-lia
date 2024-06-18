var formSignin = document.querySelector('#signin');
var formSignup = document.querySelector('#signup');
var btnColor = document.querySelector('.btnColor');

document.querySelector('#btnSignin')
  .addEventListener('click', () => {
    formSignin.style.left = "25px";
    formSignup.style.left = "450px";
    btnColor.style.left = "0px";
});

document.querySelector('#btnSignup')
  .addEventListener('click', () => {
    formSignin.style.left = "-450px";
    formSignup.style.left = "25px";
    btnColor.style.left = "110px";
});

document.querySelector('#signup').addEventListener('submit', function (e) {
  e.preventDefault();
  
  var email = document.querySelector('#signupEmail').value;
  var password = document.querySelector('#signupPassword').value;
  var confirmPassword = document.querySelector('#signupPassword2').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  var users = JSON.parse(localStorage.getItem('users')) || [];
  
  var userExists = users.some(user => user.email === email);

  if (userExists) {
    alert("User already exists!");
  } else {
    users.push({ email: email, password: password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("User registered successfully!");
    formSignin.style.left = "25px";
    formSignup.style.left = "450px";
    btnColor.style.left = "0px";
  }
});

document.querySelector('#signin').addEventListener('submit', function (e) {
  e.preventDefault();
  
  var email = document.querySelector('#signinEmail').value;
  var password = document.querySelector('#signinPassword').value;

  var users = JSON.parse(localStorage.getItem('users')) || [];
  
  var user = users.find(user => user.email === email && user.password === password);

  if (user) {
    alert("Login successful!");
    window.location.href = "inicial.html";  // Redirect to another page after successful login
  } else {
    alert("Invalid email or password!");
  }
});
