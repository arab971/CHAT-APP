import jwt from "jsonwebtoken";
import User from "../db/schemma.js";
export const protectRoute = async(req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded){
      return res.status(401).json({ message: "Invalid token" });
    }
const user =  await User.findById(decoded.userId).select("-password");
    req.user = user;
    next();
  } catch (error) {
    console.log("error in protectRoute middleware", error.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};
