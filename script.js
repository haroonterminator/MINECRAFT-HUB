alert("Welcome to Minecraft Hub by Haroon!");
Swal.fire({
  title: 'Welcome!',
  text: 'Welcome to the Minecraft Hub by Haroon!',
  imageUrl: 'images/logo.png',  
  imageWidth: 100,
  imageHeight: 100,
  imageAlt: 'Logo',
  confirmButtonText: 'Let’s Go!',
  background: '#121212',
  color: '#439911'
});
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
