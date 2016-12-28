var mongoose = require('mongoose');

module.exports = mongoose.model('Gift', {
  name : {type : String, default: ''}
});