// ✅ Use dynamic base URL (works locally & after deployment)
const baseURL = window.location.origin + "/api";

// ✅ Signup function
async function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !password) return alert("Please fill all fields");

  try {
    const res = await fetch(`${baseURL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    alert(data.message || JSON.stringify(data));

    if (res.ok) {
      // ✅ After successful signup, go to login page instead of main
      window.location.href = "/login";
    }
  } catch (err) {
    console.error(err);
    alert("Could not connect to server");
  }
}



// ✅ Login function
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter both email and password");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login Successful!");
      // 👇 FIX: Save name instead of email
      localStorage.setItem("username", data.name || data.email);
      window.location.href = "/main"; // ejs route
    } else {
      alert(data.message || "Invalid login details");
    }
  } catch (error) {
    alert("Error connecting to server!");
    console.error(error);
  }
}
