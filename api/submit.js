export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const formEndpoint = process.env.FORM_URL;

  try {
    const response = await fetch(formEndpoint, {
      method: "POST",
      body: req.body,
      headers: {
        "Content-Type": req.headers["content-type"]
      }
    });

    const text = await response.text();

    res.status(200).send("Submitted successfully");
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
}
