import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized, token missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // depending on how you signed the token
    req.userId = decoded.id || decoded.userId; 

    next();
  } catch (error) {
    console.error("Error during authentication:", error.message);
    return res.status(401).json({ message: "Unauthorized, token invalid" });
  }
};
