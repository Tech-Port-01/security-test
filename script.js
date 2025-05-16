document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // stop form from submitting the traditional way

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
        const response = await fetch("https://security-test-one.vercel.app/api/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            document.getElementById("successMessage").classList.remove("hidden");
            document.getElementById("contactForm").reset();
        } else {
            alert("There was an error submitting the form.");
        }
    } catch (error) {
        alert("Network error: " + error.message);
    }
});
