import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs' // tip we are using bcryptjs not bcrypt as bcrypt, might cause problems in production
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

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


    export const signin = async (req, res, next) => {
        const { email, password } = req.body; // first we destructure the data recieved from the request
        try {
          const validUser = await User.findOne({ email }); // here we are using the model and executing a mangoose function to find the email
          if (!validUser) return next(errorHandler(404, 'User not found')); // if email is not found we return a 404 message
          const validPassword = bcryptjs.compareSync(password, validUser.password); //here we are comparing the hashed password with value in DB
          if (!validPassword) return next(errorHandler(401, 'wrong credentials')); // we are returning a generic error , we could have returned Password not found 
          const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET); // for signing the token we use a unique value for user - what better than system generated ID
          // the secret is something unique about your project. 
          const { password: hashedPassword, ...rest } = validUser._doc; // here we are reducing the user information and not including the password sent back in the response
          // we are using validUser._doc _doc to include just the valid relevant information to be returned in the response hence
          const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    res
      .cookie('access_token', token, { httpOnly: true, expires: expiryDate }) // here we are setting the token in cookie of the response sent
      // httpOnly: true - this prevents third party application from modifing your cookie
      .status(200) // sending a 200 code
      .json(rest); // The reducted user information
        }catch (error)
        {
            next(error); // same as above explaination

        }
    };

    export const google = async (req, res, next) => {
        try {
          const user = await User.findOne({ email: req.body.email });
          if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); // we are doing the same thing as in signin
            const { password: hashedPassword, ...rest } = user._doc;
            const expiryDate = new Date(Date.now() + 3600000); // 1 hour
            res
              .cookie('access_token', token, {
                httpOnly: true,
                expires: expiryDate,
              })
              .status(200)
              .json(rest);
          } else {
            const generatedPassword =
              Math.random().toString(36).slice(-8) +
              Math.random().toString(36).slice(-8); // this is going to create a random string password
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10); //hash pass
            const newUser = new User({ //save the user
              username:
                req.body.name.split(' ').join('').toLowerCase() +
                Math.random().toString(36).slice(-8), //create random username
              email: req.body.email,
              password: hashedPassword,
              profilePicture: req.body.photo,
            });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            const { password: hashedPassword2, ...rest } = newUser._doc;
            const expiryDate = new Date(Date.now() + 3600000); // 1 hour
            res
              .cookie('access_token', token, {
                httpOnly: true,
                expires: expiryDate,
              })
              .status(200)
              .json(rest);
          }
        } catch (error) {
          next(error);
        }
      };
 