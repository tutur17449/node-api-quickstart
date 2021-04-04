const corsOptions = function (req, res, next) {
  const domains = process.env.CORS_DOMAINS.split(",");
  const origin = req.headers.origin;

  if (domains.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Methods", [
    "GET",
    "PUT",
    "POST",
    "DELETE",
    "POST",
  ]);
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
};

module.exports = corsOptions;
