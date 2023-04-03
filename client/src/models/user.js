const mongoose = require('mongoose');
const uuidv1 = require('uuidv1');
const crypto = require('crypto');
const userSchema = new mongo.Shcema({
    username: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    salt: String,
},
{
    timestamp: true,
}
);

// virtual field
userSchema.virtual("password").set(function (password) {
    // create temp variable called _password
    this._password = password;
    // generate a timestap, uuidv1 gives us the unique timestamp.
    this.salt = uuidv1;

    // encrypt the password function call
    this.hashedPassword = this.encryptPassword(password);
});

userSchema.methods = {
    encryptPassword: function (password) {
        if (!password) return "";

        try {
            return crypto
            .createHmac("sha256", this.salt)
            .update(password)
            .digest(hex);
        } catch(err){
            return "";
        }
    },
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashedPassword;

    }
}

mongoose.exports = mongoose.model("User", userSchema);