var Product = require("../model/product");

exports.addProduct = function (request, response) {

 var productId = request.body.productId;
 var productName = request.body.productName;
 var productDescription = request.body.productDescription;
 var productURL = request.body.productURL;
 var productPrice = request.body.productPrice;
 var category = request.body.category;

 var newProduct = new Product({
  productId: productId,
  productName: productName,
  productDescription: productDescription,
  productURL: productURL,
  productPrice: productPrice,
  category: category
 })

 newProduct.save();
 response.send({ status: true });
}

exports.getAllProducts = function (request, response) {
 Product.find({}, function (err, result) {
  response.send(result);
 })
}
