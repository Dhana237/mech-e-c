import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, message } = req.body;

  try {
    await sendgrid.send({
      to: {email}, // must match verified sender
      from: "signmechec@gmail.com", // must be verified in SendGrid
      subject: `New message from ${email}`,
      text: message,
      html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}