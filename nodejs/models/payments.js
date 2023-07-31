"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var paySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title:{
        type: Schema.Types.ObjectId,
        ref: 'Books',
        required: true
  },
  quantity:{
        type: Schema.Types.ObjectId,
        ref: 'book',
        required: true
  },
  phonenum: String,
}, {
  timestamps: true
});

var PaySchema = mongoose.model('Payment', paySchema);
module.exports = PaySchema;
