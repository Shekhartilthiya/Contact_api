import express from 'express'
import { deleteContactById, getContactByUserId, getContacts, getContactsById, newContact, updateContactById } from '../Controllers/contact.js';
import { isAthenticated } from '../Middleware/Auth.js';


const router = express.Router();

//new contact
//@api dec: creating contact;
//@api method : post
// @api endpoint: /api/contact/new


router.post("/new",isAthenticated,newContact);

//get all contacts
//@api desc: get all contacts
//@api method: get
//@api endpoint: /api/contact/getallcontact
router.get("/",getContacts);

// get contact by Id
//@api desc: get contact by Id
//@api method: get
//@api endpoint: /api/contact/:id
router.get("/:id",getContactsById);

// get contact by UserId specifc
//@api desc: get contact by userId
//@api method: get
//@api endpoint: /api/contact/:id
router.get("/userid/:id",getContactByUserId);



//update contact by Id
//@api desc: update contact by Id
//@api method: put
//@api endpoint: /api/contact/:id
router.put('/:id',isAthenticated,updateContactById);


//delete contact by Id
//@api desc: update contact by Id
//@api method: delete
//@api endpoint: /api/contact/:id
router.delete('/:id',isAthenticated,deleteContactById);


export default router;