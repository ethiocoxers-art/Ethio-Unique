const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Telegram Bot Config
const TELEGRAM_BOT_TOKEN = '8018622943:AAHPuBJDXJIxZUiylVRyXOEuFxaoAdae6bE';
const TELEGRAM_CHAT_ID = '5423556915';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  const { name, email, phone, course } = req.body;

  const message = `
📩 New Student Registration:
👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
📘 Course: ${course}
  `;

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
    });

    res.status(200).json({ message: 'Registration successful and sent to Telegram!' });
  } catch (error) {
    console.error('Error sending message to Telegram:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to send message to Telegram.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
