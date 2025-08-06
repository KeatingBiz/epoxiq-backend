const express = require('express');
const app = express();
app.use(express.json());

// Health check
app.get('/healthz', (_, res) => res.json({ ok: true }));

// Placeholder render endpoint
app.post('/render', (req, res) => {
  const jobId = Date.now().toString();
  res.status(202).json({
    jobId,
    resultUrl: 'https://placehold.co/600x400?text=Coming+Soon'
  });
});

module.exports = app;    // Vercel wraps this automatically
