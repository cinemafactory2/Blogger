const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSc = new Schema({
    title: {
        type: String
    },
    content: {
        type:String
    },
    createdBy: {
        type: String
    },
    category: {
        type: String
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Blog = mongoose.model("Blog", BlogSc);

