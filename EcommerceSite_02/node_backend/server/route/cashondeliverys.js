var CashOnDelivery = require('../model/cashondelivery');

exports.addCustomerData = function (request, response) {
 console.log(request.body);
 // take data from frontend
 var mobileNum = request.body.mobileNum;
 var name = request.body.name;
 var address = request.body.address;
 var landmark = request.body.landmark;
 var state = request.body.state;
 var city = request.body.city;
 var pincode = request.body.pincode;

 var newCustomerData = new CashOnDelivery({
  mobileNumber: mobileNum,
  name: name,
  address: address,
  landmark: landmark,
  state: state,
  city: city,
  pincode: pincode
 });

 // CashOnDelivery.findOne({ mobileNum: mobileNum }, function (err, event) {
 //  if (err) {
 //   response.send({ status: false, message: "Error occured while finding if mobile number exists", err });
 //   console.error(err);
 //  }
 //  else {
 //   if (event == null) {
 //    newCustomerData.save(function (err1, result) {
 //     if (err1) {
 //      response.send({ status: false, message: "Error in saving custoumer address details", err1 });
 //      console.error(err1);
 //     } else {
 //      response.send({ status: true, message: "Successfully saved custoumer address details", result });
 //      console.log(result);
 //     }
 //    });
 //   } else {
 //    response.send({ status: false, message: "Mobile number already exists:", event });
 //    console.log("Mobile number already exists:" + event);
 //   }
 //  }
 // });

 newCustomerData.save(function (err1, result) {
  if (err1) {
   response.send({ status: false, message: "Error in saving custoumer address details", err1 });
   console.error(err1);
  } else {
   response.send({ status: true, message: "Successfully saved custoumer address details", result });
   console.log(result);
  }
 });

 // newCustomerData.save();
 // console.log("newCustomerData", newCustomerData)
 // response.send({ status: true });

 // use mongodb and save document in DB    
}


