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
router1.post('/api/billingAddress',control.BillingAddress);
router1.post('/api/getAddress',control.GetAddress)
router1.post('/api/payme',control.Payme);
router1.post('/api/fakemail',control.FakeMail);
router1.all('/api/GetDataby',control.getdataby);
router1.post('/api/admin',control.Admin);
router1.post('/api/deleteUserData',control.DeleteUserData);
router1.post('/api/updateUserData',control.UpdateUserData);
router1.post('/api/deletePropertyData',control.DeletePropertyData);
router1.post('/api/updatePropertyData',control.UpdatePropertyData);
router1.post('/api/deleteContactData',control.DeleteContactData);
router1.post('/api/updateContactData',control.UpdateContactData);
router1.post('/api/deleteBillingData',control.DeleteBillingData);
router1.post('/api/updateBillingData',control.UpdateBillingData);
module.exports=router1;