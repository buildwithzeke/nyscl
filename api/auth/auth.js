import { validateCallup } from "../inc/functionalities.js";

export const loginUser = (req, res) => {
    console.log(req.body);

}

export const regUser = (req, res) => {
    const { callup, email, pass } = req.body;

    //check if any empty entry
    if(!callup || !email || !pass ) return res.status(500).json({"msg": "All fields required!"});
    
    //validate callup number
    if(!validateCallup('')) return res.status(500).json({"msg": "Invalid callup number"});

    //encrypt password


    //store to database

    //response success message
    res.status(201).json({"msg": "Registration Successful."});
}