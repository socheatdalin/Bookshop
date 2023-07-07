"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var booksSchema = new mongoose.Schema({
        name: {
                type: String,
                required: true
        },
        category: {
                type: Schema.Types.ObjectId,
                ref: 'Categories',
                required: true
        },
        desc: String,
        imageUrl: String,
}
, {
        timestamps: true,
});

booksSchema.index({ name: 'text' });
var Books = mongoose.model('Books', booksSchema);
module.exports = Books;
