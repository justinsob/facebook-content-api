module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).end(
    JSON.stringify({
      week: "June 10",
      topic: "Hiring Without Drama",
      ctaWord: "TEAM",
      drp: false,
      toolOrStory: "Our Salon Hiring Checklist"
    })
  );
};
