const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new mongoose.Schema({
  _id: {type: Number},
  name: {type: String},
  initialBalance: {type: Number},
  hostName: {type: String},
});

// Not good practice, just for a graduation activity
userSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: '_id'});


module.exports.User = mongoose.model('User', userSchema);