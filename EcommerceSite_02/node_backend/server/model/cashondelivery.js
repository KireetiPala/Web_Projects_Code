var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema
var cashondeliverySchema = new Schema({
 mobileNum: {
  type: Number,
  unique: true,
  index: true
 },
 name: {
  type: String
 },
 address: {
  type: String
 },
 landmark: {
  type: String
 },
 state: {
  type: String
 },
 city: {
  type: String
 },
 pincode: {
  type: String
 }
});

var CustomerData = module.exports = mongoose.model('CustomerData', cashondeliverySchema);
//mongoose.model('User',UserSchema);

















