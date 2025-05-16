document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(this);

  const response = await fetch("https://security-test-one.vercel.app/api/submit", {
    method: "POST",
    body: formData
  });

  if (response.ok) {
    alert("Submitted!");
  } else {
    alert("Failed to submit.");
  }
});
