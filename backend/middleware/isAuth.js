import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) return res.status(401).send({ message: "Unauthorized" });

        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!verifyToken) return res.status(403).send({ message: "Forbidden" });

        req.userid = verifyToken;
        next(); 
    } catch (error) {
        console.error("Error during authentication:", error);
        res.status(500).send({ message: "is Auth Error" });
    }
};

export default isAuth;
