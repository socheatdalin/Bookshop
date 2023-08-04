"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CartSchema = new mongoose.Schema({
  
  book: {
    type: Schema.Types.ObjectId,
    ref: 'Books',
    required: true
  },
        quantity: String,
        price:String, 
        total:String
}, {
  timestamps: true,
});

CartSchema.index({ name: 'text' });
var Carts = mongoose.model('Carts', CartSchema);
module.exports = Carts;
