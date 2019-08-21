var User = require("../model/user")
const jwt = require('jsonwebtoken')

exports.registerUser = function (req, res) {
    console.log(req.body);
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var emailId = req.body.emailId;
    var password = req.body.password;
    var mobileNumber = req.body.mobileNumber;
    var newUser = new User({
        firstName: firstName,
        lastName: lastName,
        emailId: emailId,
        password: password,
        mobileNumber: mobileNumber
    });
    User.findOne({ emailId: emailId }, function (err, event) {
        if (err) {
            res.send({ status: false, message: "Error occured while finding if email exists", err });
            console.error(err);
        }
        else {
            if (event == null) {
                newUser.save(function (err1, result) {
                    if (err1) {
                        res.send({ status: false, message: "Registration failed", err1 });
                        console.error(err1);
                    } else {
                        let payload = { subject: result._id }
                        let token = jwt.sign(payload, "secretkey")
                        res.status(200).send({ token, status: true, message: "Registration successful", result });
                    }
                });
            } else {
                res.send({ status: false, message: "Email already exists:", event });
                console.log("email already exists:" + event);
            }
        }
    });
}

exports.loginUser = function (req, res) {
    var emailId = req.body.emailId;
    var password = req.body.password;
    User.findOne({ emailId: emailId }, function (err, obj) {
        if (err) {
            res.send({ status: false, message: "error occured while procesing login request" });
            console.log(err);
        } else {
            if (obj == null) {
                res.send({ status: false, message: "User not registered" });
            } else {
                if (obj.password == password) {
                    let payload = { subject: obj._id }
                    let token = jwt.sign(payload, "secretkey")
                    res.status(200).send({ token, status: true, message: "login successful", obj });
                    console.log(token);
                } else {
                    res.send({ status: false, message: "Incorrect password" });
                    console.log(obj);
                }
            }
        }
    });
}



