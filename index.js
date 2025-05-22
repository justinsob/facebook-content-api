const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    week: "June 10",
    topic: "Hiring Without Drama",
    ctaWord: "TEAM",
    drp: false,
    toolOrStory: "Our Salon Hiring Checklist"
  });
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
