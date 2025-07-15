
const users = {
  "admin": "admin123",
  "agent1": "password1"
};

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (users[username] && users[username] === password) {
    document.getElementById("loginMessage").textContent = "Login successful!";
    window.location.href = username === "admin" ? "admin.html" : "index.html";
  } else {
    document.getElementById("loginMessage").textContent = "Invalid credentials.";
  }
}
