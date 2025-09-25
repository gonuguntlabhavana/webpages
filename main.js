const API = "https://jsonplaceholder.typicode.com/users"; // Mock server
const form = document.getElementById("contactForm");
const list = document.getElementById("contactList");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  // Send POST request
  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  // Fetch updated list
  const res = await fetch(API);
  const users = await res.json();
  render(users);
});
function render(users) {
  list.innerHTML = users.map(u => `<li>${u.name} — ${u.email}</li>`).join("");
}
