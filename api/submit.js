export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const formUrl = process.env.FORM_URL;

  const response = await fetch(formUrl, {
    method: 'POST',
    body: new URLSearchParams(req.body),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  if (response.ok) {
    return res.status(200).json({ message: 'Form submitted successfully.' });
  } else {
    return res.status(500).json({ error: 'Submission failed.' });
  }
}
