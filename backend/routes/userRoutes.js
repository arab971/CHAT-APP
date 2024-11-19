import e from "express";
import { getUsers } from "../controlers/user.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = e.Router();
router.get("/",protectRoute, getUsers);
export default router;