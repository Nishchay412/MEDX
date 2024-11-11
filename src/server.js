// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const SibApiV3Sdk = require('@getbrevo/brevo');
require('dotenv').config();

const BREVO_API = "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"

const app = express();
app.use(cors());
app.use(bodyParser.json());

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, BREVO_API);

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({
    to: [{ email }],
    sender: { email: '[Your Verified Sender Email]', name: '[Your Company Name]' },
    subject: 'Thank You for Contacting Us',
    htmlContent: `<p>Hi ${name},</p><p>Thank you for reaching out. We have received your message: "${message}". Our team will get back to you shortly.</p><p>Best regards,<br>[Your Company Name]</p>`,
  });

  apiInstance.sendTransacEmail(sendSmtpEmail)
    .then(() => res.status(200).send('Email sent successfully'))
    .catch((error) => res.status(500).send(`Error: ${error.message}`));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
