const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., images, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Serve registration page
app.get('/registration.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'registration.html'));
});

// In-memory user store (demo only)
const users = [];

// Handle registration form submission
app.post('/register', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    country,
    travelInterest,
    phoneCode,
    phoneNumber,
    travelPreferences,
    travelExperience,
    termsAccepted,
    newsletterSubscribed
  } = req.body;

  // Basic validation
  if (!firstName || !lastName || !email || !password || !country || !termsAccepted) {
    return res.status(400).send('Please fill all required fields and accept terms.');
  }

  // Check if user already exists
  if (users.find(u => u.email === email)) {
    return res.status(400).send('User  with this email already exists.');
  }

  // Store user (in real app, hash password and store in DB)
  users.push({
    firstName,
    lastName,
    email,
    password,
    country,
    travelInterest,
    phone: phoneCode + phoneNumber,
    travelPreferences: Array.isArray(travelPreferences) ? travelPreferences : [travelPreferences],
    travelExperience,
    newsletterSubscribed: newsletterSubscribed === 'on'
  });

  res.send(`
    <h1>Registration Successful</h1>
    <p>Welcome, ${firstName} ${lastName}!</p>
    <p><a href="/registration.html">Back to Registration</a></p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});