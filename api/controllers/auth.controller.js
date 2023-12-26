import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs' // tip we are using bcryptjs not bcrypt as bcrypt, might cause problems in production
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => { // we added next here to implement middleware
   const {username,email,password}=req.body;
   //here we are extracting the values from req body destructered

   const hashedPassword = bcryptjs.hashSync(password, 10);

// here we are encryting the password . note hashSync is asyncronous method , else you can use hash only then need to use await.
// note that 10 is the number of rounds for the solve . this is the trade off between complexity and speed

   const newUser=new User({username,email,password:hashedPassword});

// Add we create a new user with the data we had injecting it in model
// this can be writen as username:username , but after es6 if the key and value is the same , we need to write it once



try{

    await newUser.save();

    // this step we are updating the DB

    res.status(201).json({message:"User Created Successfully !"});

}catch(error){

    // res.status(500).json(error.message);

    //using try and catch and sending error message to client

    next(error);

    // we are seding the error to middleware

    //rather than using above middleware we can pass a custom error

    //next(errorHandler(300,"something went wrong .... "));
}


    };
 