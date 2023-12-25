import express from 'express';
import { test } from '../controllers/user.controller.js';

const router=express.Router();

// router.get('/',(req,res)=>{

//          res.json({message:'API is working'});
    
//        })

    //    The best practice to keep this arrow function in a seperate file called controller
//the new calling function looks as below

router.get('/', test);
       export default router;