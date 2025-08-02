export default function handler(req, res) {
  res.status(200).json({
    services: [
      "ADHD Business Coaching for Entrepreneurs",
      "Support for Lawyers and Paralegals with ADHD",
      "Access to Work and PIP application assistance"
    ]
  });
}
