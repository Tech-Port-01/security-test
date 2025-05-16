const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const res = await fetch("https://security-test-one.vercel.app/api/submit", {
      method: "POST",
      body: formData
    });

    if (res.ok) {
      form.reset();
      successMessage.classList.remove("hidden");
    } else {
      alert("Something went wrong.");
    }
  } catch (err) {
    alert("Network error. Try again later.");
  }
});
