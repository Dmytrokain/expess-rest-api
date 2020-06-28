const jwt = require('jsonwebtoken');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err) => {
      if (err) return res.status(401).json({ message: 'Invalid JWT TOKEN' });
      return next();
    });
  } else {
    return res.status(401).json({ message: 'Unathorized' });
  }
};
