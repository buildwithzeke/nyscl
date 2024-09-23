import bcrypt from 'bcrypt';

import corpers from '../../model/userModel.js';
import { validateCallup } from "../inc/functionalities.js";

// corper login function
export const loginUser = async (req, res) => {
    
    //get corpers info
    const { callup, pass } = req.body;

    //check if any empty entry
    if(!callup || !pass ) return res.status(500).json({"msg": "All fields required!"});

    //validate callup number
    if(!validateCallup(callup)) return res.status(500).json({"msg": "Incorrect info!"});

    //fetch corper info
    const corps = await corpers.findOne({"callup": callup} );
    if(corps == null) return res.status(500).json({"msg": "Incorrect info!"});

    //validate password
    const passCheck = await bcrypt.compare(pass, corps.pass);
    if(!passCheck) return res.status(500).json({"msg": "Incorrect info!"});

    //response success message
    res.status(200).json({"msg": "login Successful!"});
}

// corper registration function
export const regUser = async (req, res) => {

    const { callup, email, pass } = req.body;

    //check if any empty entry
    if(!callup || !email || !pass ) return res.status(500).json({"msg": "All fields required!"});

    //chech a corper exist
    const corperExist = await corpers.findOne({"callup": callup} );
    if(corperExist != null) return res.status(500).json({"msg": "Existing corper"});
    
    //validate callup number
    if(!validateCallup(callup)) return res.status(500).json({"msg": "Invalid callup number"});

    //encrypt password
    const hashPass = await bcrypt.hash(pass, 7); 

    const newCorps = new corpers({
        callup,
        email,
        pass: hashPass
    })

    //store to database
    newCorps.save();

    //response success message
    res.status(201).json({"msg": "Registration Successful."});
}