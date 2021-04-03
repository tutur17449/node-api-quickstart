const corsOptions = function (req, res, next) {
  const domains = Array.from(process.env.CORS_DOMAINS) || "*";

  res.header("Access-Control-Allow-Origin", domains);
  res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

module.exports = corsOptions;
