const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
    }, (err) => {
        if (err) {
            console.log(`Mongoose connection failed ${err}`);
        } else {
            console.log(`Mongoose connection successful`);
        }
 });
 require(path.join(__dirname, '../models/Entry'));
 mongoose.Promise = global.Promise;
  module.exports = mongoose;
