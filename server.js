// Minimal static file server for deploying the portfolio to Railway.
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static assets (index.html, style.css, script.js, etc.)
app.use(express.static(path.join(__dirname)));

// Fallback to index.html for any other route (simple SPA-friendly behavior)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Portfolio server running on port ${PORT}`);
});
