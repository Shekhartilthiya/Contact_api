import jwt from "jsonwebtoken";
import {User} from '../Models/User.js'

export const isAthenticated = async (req,res,next)=>{

    const token = req.header('Auth');
    console.log(token);
   if(!token){
       return res.json({message: "Login first"});
   }

const decoded= jwt.verify(token , process.env.JWT);
console.log(decoded);
   const id= decoded.user;


   let user= await User.findById(id);
   if(!user){
       return res.json({message: "User not find "});
   }
   req.user=user;


   next();
}
