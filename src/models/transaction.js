const mongoose = require("mongoose");
var AutoIncrement = require('mongoose-sequence')(mongoose);

const transactionSchema = new mongoose.Schema({
  _id: {type: Number},
  type: {
    type: String,
    enum: ["CREDIT", "DEBIT"],
    default: "CREDIT",
  },
  value: { type: Number },
  userId: { type: Number },
});

// Not good practice, just for a graduation activity
transactionSchema.plugin(AutoIncrement, {id:'order_seq_transaction',inc_field: '_id'});

module.exports.Transaction = mongoose.model("Transaction", transactionSchema);
