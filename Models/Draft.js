const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DraftSchema = new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    createdBy: {
        type: String,
        default: "mano.sriram0@gmail.com"
    },
    category: {
        type: String
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Draft = mongoose.model("Draft", DraftSchema);
