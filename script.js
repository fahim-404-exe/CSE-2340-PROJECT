
const scriptURL = "https://script.google.com/macros/s/AKfycbxOxPsjpQ365v6rpMfl_sesI4LYsXREMkVmi0_U4Y9fWW75kOYyDOoELzzFt-O65D4R/exec";

const form = document.getElementById("contact-form");

form.addEventListener("submit", e => {
  e.preventDefault(); // stop normal form submission

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form)
  })
  .then(() => {
    alert("✅ Message sent successfully!");
    form.reset(); // clear the form after submission
  })
  .catch(error => {
    alert("❌ Error: " + error.message);
  });
});