const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

// difaind user schema 
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        minLength: 5,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

// after save this new User then password Hash
userSchema.pre('save', async function(next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const userModel = model("singin", userSchema);

module.exports = userModel;