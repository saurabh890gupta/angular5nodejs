const express =require('express');
const router1=express.Router();
const control=require('../Controller/control');




router1.get('/',control.home);
router1.post('/api/signup',control.Signup);
router1.post('/api/login',control.Login);
router1.get('/api/logout',control.Logout);
router1.post('/api/contactus',control.Contactus);
router1.post('/api/forgetpassword',control.ForgetPassword);
router1.post("/api/changpassword",control.ChangPassword);
// router1.post('/api/propertysubmit',control.PropertySubmit)
router1.post('/api/Upload', control.uplaod);
router1.get('/api/Fileget', control.fileget);
router1.post('/api/propertydetailsget?', control.PropertyDetailsGet);
router1.get('/api/propertydeleteAll',control.PropertyDeleteAll);
router1.get('/api/exmple',control.Exmple);
router1.get('/api/activateAccount/:email?',control.ActivateAccount) //this use params( /:email) and query(?)
router1.post('/api/searchemail',control.SearchEmail)
module.exports=router1;