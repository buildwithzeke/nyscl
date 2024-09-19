import express from "express";

//intiate express router
const Router = express.Router();


// functions
import { loginUser, regUser } from '../api/auth/auth.js';

//registration route
Router.post("/register", regUser)

//login route
Router.post("/login", loginUser)


export default Router;