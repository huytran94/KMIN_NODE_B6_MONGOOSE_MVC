import { Router } from "express";
import AuthController from "../app/controllers/authController.js";

const authRoute = Router();
authRoute.get("/signup", AuthController.signup)
export default authRoute;
