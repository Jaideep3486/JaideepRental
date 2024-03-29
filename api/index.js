import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { error } from 'console';
import userRoutes from './routes/user.route.js'; // make sure to add js at the end as this is backend component
import authRoutes from './routes/auth.route.js'; // make sure to add js at the end as this is backend component
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

mongoose
  .connect(process.env.mango)
  .then(() => {
    console.log('Connected to mangodb');
  })
  .catch((error) => {
    console.log(error);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use(express.json());

//by default if we send a json , we will get an undefined message . we need to include above statement to be able to recieve json message in post

app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server listening on port 3000!#$');
});

//   app.get('/',(req,res)=>{

//     res.json({message:'API is working'});

//   })

//   Above is the most simplest API possible , we are just defining a app.get with path and req and res parametes and returning a json message
//But the best practice is to create routes and then controllers to achive the same functionality
// this example displays how you can achive the API directly through index.js or you can write it in routes alone or the best modular approach would be to use routers and controllers
// as we proceed through i will detail more in the sections with relevant details

app.use('/api/user', userRoutes);

// we are using router in above example which is imported to routes and the address we are assigning to this route is /api/user

app.use('/api/auth', authRoutes);

// we have seperated the routes for user and auth

app.use('/api/listing', listingRouter); // Step 1 . here we are registering the router and make app use it and then create router for it

app.use((err, req, res, next) => {
  const statuscode = err.statusCode || 500; // if there is no status code just use 500
  const message = err.message || 'something went wrong';
  return res.status(statuscode).json({
    success: false,
    message,
    //error: message,
    statuscode,
    //statuscode: statuscode
  });
});
//this is a genric middleware in which inputs are error , request and resp . next we use when we go need to go to next middleware implementation
