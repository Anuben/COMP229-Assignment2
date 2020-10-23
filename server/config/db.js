/* module.exports = 
{
    //"URI": "mongodb://localhost/book_store"
    "URI": "mongodb+srv://thomas:Hq3DKYN2NaAqGyyV@mongodbserver.k15hk.azure.mongodb.net/book_store?retryWrites=true&w=majority",
    "Secret": 'SomeSecret'
} */


module.exports = 
{
    "URI": "mongodb://localhost/business_contacts"
}
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/business_contacts";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var mysort = { name: 1 };
  dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});