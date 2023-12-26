import express  from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { error } from 'console';
import userRoutes from './routes/user.route.js' // make sure to add js at the end as this is backend component
import authRoutes from './routes/auth.route.js' // make sure to add js at the end as this is backend component

dotenv.config();

mongoose.connect(process.env.mango).then(()=>{

    console.log("Connected to mangodb");

}).catch((error)=>{

    console.log(error);

})

const app = express();

app.use(express.json());

//by default if we send a json , we will get an undefined message . we need to include above statement to be able to recieve json message in post


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

app.use("/api/user",userRoutes);

// we are using router in above example which is imported to routes and the address we are assigning to this route is /api/user

app.use("/api/auth",authRoutes );

// we have seperated the routes for user and auth