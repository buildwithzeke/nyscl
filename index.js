import path from 'path';
import cors from "cors";  
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose"; 
import {fileURLToPath} from 'url';
import bodyParser from "body-parser";

//auth routes
import authRouter from "./router/authRouter.js";

// configure environment variable
dotenv.config();

// listing port
const port = process.env.PORT || 8000;

//setting file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// initiate app
const nyscl = express();

// middle wares
nyscl.use(cors());
nyscl.use(bodyParser.json());
nyscl.use(bodyParser.urlencoded({ extended: true}));


//dataBase connection
mongoose.connect(process.env.CONNSTRING)
.then(() => console.log("Database connected successful!"))
.catch(() => console.log("Error connecting to database!"));

//App entry point
nyscl.use("/auth", authRouter);

// static files
nyscl.use(express.static(path.join(__dirname, '/client/build')));

//not found routes
nyscl.use("*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname + '/client/build',  'index.html'));
});


nyscl.listen(port , () => {
    console.log(`App runing on 127.0.0.1:${port}`);
})





