const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();                // prevent normal form POST
  successMessage.classList.add("hidden");
  
  const formData = new FormData(form);

  try {
    const res = await fetch(
      "https://security-test-one.vercel.app/api/submit",
      {
        method: "POST",
        body: formData
      }
    );

    if (!res.ok) throw new Error("Network response was not OK");

    // on success…
    form.reset();                     // clear the form
    successMessage.classList.remove("hidden");
  } catch (err) {
    console.error("Form submit error:", err);
    alert("There was a problem submitting your message. Please try again.");
  }
});
