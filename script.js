
function showPopup() {
  document.getElementById("custom-popup").style.display = "block";
}

function closePopup() {
  document.getElementById("custom-popup").style.display = "none";
}

// Automatically show the popup after 2 seconds
setTimeout(showPopup, 2000);
function showForm(form) {
  document.getElementById('signin-form').style.display = form === 'signin' ? 'block' : 'none';
  document.getElementById('signup-form').style.display = form === 'signup' ? 'block' : 'none';
}
function validateLoginForm() {
  const username = document.getElementById("signin-username").value.trim();
  const password = document.getElementById("signin-pass").value.trim();

  if (username === "" || password === "") {
    alert("Please fill in all fields.");
    return false;
  }
  return true;
}

function validateSignupForm() {
  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-pass").value.trim();

  if (username === "" || password === "") {
    alert("Please fill in all fields.");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return false;
  }
  return true;
}
