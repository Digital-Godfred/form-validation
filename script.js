const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];

  // Perform all checks
  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }

  if (password.value.length >= 25) {
    messages.push("Password cannot be longer than 25 characters");
  }

  if (!/[A-Z]/.test(password.value)) {
    messages.push("Password must contain at least one uppercase letter");
  }

  if (!/[a-z]/.test(password.value)) {
    messages.push("Password must contain at least one lowercase letter");
  }

  if (!/[0-9]/.test(password.value)) {
    messages.push("Password must contain at least a number");
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password.value)) {
    messages.push("Password must contain a special character");
  }

  // Check if there are any error messages
  if (messages.length > 0) {
    e.preventDefault(); // Prevent form submission
    errorElement.innerText = messages.join(", "); // Display error messages
  }
});
