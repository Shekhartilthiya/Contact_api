import {User} from '../Models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register =async(req, res) => {
    // res.send("hello");
    const { name, email, password } = req.body;
  
    if (name == "" || email == "" || password == "")
      return res.json({ message: "all fields are required" });
  
      // check if user already exists
      let userExists = await User.findOne({email});
  
      if(userExists){
          return res.json({message: "user already exists",success: false});
      }
  // bcrypt password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  
      let user = await User.create({name, email, password: hashedPassword});
  
  
    res.json({ message: "user scuccesfully created", success: true ,user });
  }
export const  login = async (req, res) =>{

    const {email, password} =req.body;
    
    if(email=="" || password==""){
      return res.json({message: "all fields are required"});
    }
    let user = await User.findOne({email});

    if(!user){
      return res.json({message: "User Not found",success: false});
        }

        const validPassword = await bcrypt .compare(password, user.password);
        
        if(!validPassword){
          return res.json({message: "Inavalid Password", success: false});
        }
        const token=  jwt.sign({user:user._id},process.env.JWT,{
          expiresIn: '1d'
        });

        res.json({Message: `welcome ${user.name}`,token,success: true, user});


  }