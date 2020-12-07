const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminPanel = new Schema({
    email: String,
    password: String,
    created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Admin = mongoose.model("admin", AdminPanel);

