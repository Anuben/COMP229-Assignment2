let mongoose = require('mongoose');

// create a model class
let businessModel = mongoose.Schema({
    name: String,
    email: String,
    phone: String
},
{
    collection: "business"
});

module.exports = mongoose.model('Business', businessModel);

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/business_contacts";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var mysort = { name: 1 };
  dbo.collection("business").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});