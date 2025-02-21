import express from 'express'
import { login, register } from '../Controllers/user.js';

const router = express.Router();


//userRegister
//@api name :- user resister
//@api method: - post
//@api endpoint: - /api/user/register

router.post('/register',register)
 
//UserLogin
//@api name:- user Login
//api method:- post
//@api endpoint:- /api/user/login
router.post('/login',login)



export default router;