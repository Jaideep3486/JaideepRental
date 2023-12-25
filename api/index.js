import express  from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { error } from 'console';

dotenv.config();

mongoose.connect(process.env.mango).then(()=>{

    console.log("Connected to mangodb");

}).catch((error)=>{

    console.log(error);

})

const app = express();


app.listen(3000, () => {
    console.log('Server listening on port 3000!#$');
  });