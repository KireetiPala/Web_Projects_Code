var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
 productId: {
  type: Number,
  unique: true,
  index: true
 },
 productName: {
  type: String
 },
 productDescription: {
  type: String
 },
 productPrice: {
  type: String
 },
 productURL: {
  type: String
 },
 category: {
  type: String
 }
});

var Product = module.exports = mongoose.model('Product', ProductSchema);