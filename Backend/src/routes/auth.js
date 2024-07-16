import Router from "express";
import { dangKy } from "../controllers/auth.js";

const routerAuth = Router()

routerAuth.post('/singup', dangKy)

export default routerAuth
