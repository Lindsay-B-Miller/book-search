const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    authors: [String],
    description: String,
    image: {
        type: { String },
    },
    link: {
        type: String,
    }
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;