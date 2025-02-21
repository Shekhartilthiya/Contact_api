
import {Contact} from '../Models/Contact.js';


//get all contacts
export const getContacts = async(req, res) => {
    let userContact = await Contact.find();

        if(!userContact){
            res.json({message: "no contact exists", success: false});
        }

    res.json({message: "all contacts", userContact, success: true});
}



//create  new contact

export const newContact= async(req,res) =>{
    const {name, email, phone, type} = req.body;    

    if(name=="" || email=="" || phone=="" || type==""){ 
        return res.json({message: "all fields are required", success: false});
    }
  
        let contactExists = await Contact.findOne({email});
        if(contactExists){
            return res.json({message: "contact already exists", success: false});
        }
    
    let saveContact = await Contact.create({name, email, phone, type, user: req.user});
    res.status(201).json({message: "contact saved", success: true, saveContact});    

}

//get contact by Id

export const getContactsById = async(req,res) =>{

    const id= req.params.id;
    let userContact = await Contact.findById(id);
    if(!userContact){
        res.json({message: "no contact exists", success: false});
    }

    res.json({message: "contact found", userContact, success: true});
}

//get contact by UserId
export const getContactByUserId = async(req,res) =>{

    const id= req.params.id;
    let userContact = await Contact.find({user: id});
    if(!userContact)
      return  res.json({message: "no contact exists", success: false});

      res.json({message: "user specific contect  found", userContact, success: true});
    
};


//update contact by Id

export const updateContactById = async(req,res) =>{ 
    const id= req.params.id;
    const {name, email, phone, type} = req.body;

    let updatedContact= await Contact.findByIdAndUpdate(id,{
        name, email, phone, type,
     },{new: true} //new feld set ho jayga ager new fild dalte ho 
    );
    if(!updatedContact){
        res.json({message: "no contact exists", success: false});
    }
    res.json({message: "contact update Succesfully...!",success: true,updatedContact});
};


//delete contact by Id
export const deleteContactById = async(req,res) =>{ 
    const id= req.params.id;

    let deleteContact= await Contact.findByIdAndDelete(id);
    if(!deleteContact){
        res.json({message: "Cannot delete", success: false});
    }
    res.json({message: "Delete  Succesfully...!",success: true,deleteContact});
};






