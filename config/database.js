const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/crud",
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected to MongoDB database")
});

module.exports = db;