const mongoose = require('mongoose');
let Schema = mongoose.Schema;
var propertySchema = new Schema({
    id: String,
    user_type: String,
    propertyimage:String,
    propertyname:String,
    propertyprice:String,
    phone:String,
    propertydescreption:String,
    propertystate:String,
    propertycity:String,
    propertystatus:String,
    propertyleaseperioud:String,
    propertyminbed:String,
    propertyarea:String,
    propertySwimmingpool:Boolean,
    propertyStories:Boolean,
    propertyexit:Boolean,
    propertyFireplace:String,
    propertylaundryroom:Boolean,
    propertyJogpath:Boolean,
    propertyCeilings:Boolean,
    propertyDualsink:Boolean,
    propertyShowImage:[
    ],
    propertyVideo1:String,
    propertyVideo2:String,
    propertyVideo3:String,
    checkBox:Boolean,
    vrifivation_token:String,
    account_status:Boolean,
    user_id:String,
},{collection:'propertySchema'});


module.exports = mongoose.model('propertySchema', propertySchema );