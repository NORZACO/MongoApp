const mongoClient = require('mongodb').MongoClient


const url = 'mongodb://127.0.0.1:27017';
const dbname = 'TestDatabase';



mongoClient.connect(url, {}, (error, client) => {
  if(error)
    console.log("Cannot connect");
  console.log("Connection OK");
  const db = client.db(dbname);

  db.collection('Users').find({
    firstName: "John"
  }).toArray((error, result) => {
    console.log(result);
  });
});