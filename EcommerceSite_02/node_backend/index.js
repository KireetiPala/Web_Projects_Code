var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var User = require("./server/route/users");
var CashOnDelivery = require('./server/route/cashondeliverys');
var Product = require("./server/route/Products");

mongoose.connect("mongodb://localhost/EcommerceDB");


var app = express();

app.use(cors());

app.use(bodyParser.json());

// http://localhost:3019/api/register

app.post('/api/register', User.registerUser);

app.post('/api/login', User.loginUser);

app.post('/api/addProduct', Product.addProduct);

app.get('/api/getAllProducts', Product.getAllProducts);

app.post('/api/addCustomerData', CashOnDelivery.addCustomerData);

app.listen(3019, function () {
    console.log("Server started on 3019");
});