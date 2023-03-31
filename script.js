//your JS code here. If required.
const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberInput = document.getElementById('checkbox');
const submitButton = document.getElementById('submit');
const existingButton = document.getElementById('existing');

// Check if there are saved details
if (localStorage.getItem('username') && localStorage.getItem('password')) {
  existingButton.style.display = 'block';
}

// Show alert message
function showAlert(username) {
  alert(`Logged in as ${username}`);
}

// Save details to local storage
function saveDetails() {
  localStorage.setItem('username', usernameInput.value);
  localStorage.setItem('password', passwordInput.value);
}

// Remove details from local storage
function removeDetails() {
  localStorage.removeItem('username');
  localStorage.removeItem('password');
}

// Check if remember me is checked
function rememberMe() {
  if (rememberInput.checked) {
    saveDetails();
  } else {
    removeDetails();
  }
}

// Submit form
function submitForm(event) {
  event.preventDefault();
  const username = usernameInput.value;
  showAlert(username);
  rememberMe();
}

// Login as existing user
function loginExisting() {
  const username = localStorage.getItem('username');
  showAlert(username);
}

// Event listeners
submitButton.addEventListener('click', submitForm);
existingButton.addEventListener('click', loginExisting);
