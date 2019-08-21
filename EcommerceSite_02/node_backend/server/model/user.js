var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema
var UserSchema = new Schema({

    firstName: {
        type: String
    },
    lastName: {
        type: String
    },

    emailId: {
        type: String,
        unique: true,
        index: true
    },
    password: {
        type: String
    },
    mobileNumber: {
        type: Number
    },
});

var User = module.exports = mongoose.model('User', UserSchema);
//mongoose.model('User',UserSchema);
