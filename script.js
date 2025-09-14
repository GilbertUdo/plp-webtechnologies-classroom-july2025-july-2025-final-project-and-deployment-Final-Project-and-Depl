// Toggle Menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

// Booking Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let date = document.getElementById("date").value;

      if (name === "" || email === "" || date === "") {
        msg.textContent = "⚠️ Please fill in all required fields!";
        msg.style.color = "red";
      } else {
        msg.textContent = "✅ Appointment booked successfully!";
        msg.style.color = "green";
        form.reset();
      }
    });
  }
});
