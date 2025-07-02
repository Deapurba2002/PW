// Data akun dummy
const users = [
  { username: "admin", password: "admin123" },
  { username: "user", password: "user123" }
];

function login() {
  const uname = document.getElementById("username").value.trim();
  const pwd = document.getElementById("password").value.trim();
  const error = document.getElementById("error-msg");

  const found = users.find(u => u.username === uname && u.password === pwd);

  if (found) {
    localStorage.setItem("loggedInUser", uname);
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Username atau Password salah!";
  }
}
