const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsletterSc = new Schema({
    email: {
        type: String,
        required: true
    }
});

module.exports = Newsletter = mongoose.model("Newsletter", NewsletterSc);
