const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let errorMessages = validatePassword(password);
  if (errorMessages.length > 0) {
    e.preventDefault();
    errorElement.innerText = errorMessages.join(", ");
  }
});

function updatePasswordStrength(password) {
  const strengthElement = document.getElementById("password-strength");
  let errorMessages = validatePassword(password);

  if (errorMessages.length > 0) {
    strengthElement.innerText = "Weak password: " + errorMessages.join(", ");
    strengthElement.style.color = "red";
  } else {
    strengthElement.innerText = "Strong password";
    strengthElement.style.color = "green";
  }
}

function validatePassword(password) {
  let messages = [];
  if (password.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }
  if (password.length >= 20) {
    messages.push("Password must be less than 20 characters");
  }
  if (password.toLowerCase() === "password") {
    messages.push('Password cannot be "password"');
  }
  if (!/[A-Z]/.test(password)) {
    messages.push("Password must contain an uppercase letter");
  }
  if (!/[a-z]/.test(password)) {
    messages.push("Password must contain a lowercase letter");
  }
  if (!/[0-9]/.test(password)) {
    messages.push("Password must contain at least a number");
  }
  if (!/[^0-9a-zA-Z]/.test(password)) {
    messages.push("Password must contain a special character");
  }
  if(!password.value){
    messages.push("Password cannot be empty");
  }
  return messages;
}
