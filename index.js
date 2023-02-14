const mongoClient = require('mongodb').MongoClient;
//dotenv
require('dotenv').config();


const url = process.env.MONGO_URL;
const dbname = process.env.DATANAME




function DisplayUsers(params) {
  mongoClient.connect(url, {}, (error, client) => {
    if (error)
      console.log("Cannot connect");
    console.log("Connection OK");
    const db = client.db(dbname);
  
    db.collection('Users').find({
      firstName: "John"
    }).toArray((error, result) => {
      console.log(result);
      console.log('----');
    });
  });
}


// display_the_user_data()
// addUser()
// DisplayUsers()
// rename_all_Johns_toToms()

function display_the_user_data(params) {
  mongoClient.connect(url, {}, (error, client) => {
    if (error)
      console.log("Cannot connect");
    console.log("Connection OK");
    const db = client.db(dbname);
  
    db.collection('Users').find({
      firstName: "John"
    }, {
      projection: {
        _id: false,
        firstName: true,
        lastName: true
      }
    }).toArray((error, result) => {
      console.log(result);
      console.log('-------');
    });
  });
}


function addUser() {
  mongoClient.connect(url, {}, (error, client) => {
    if (error)
      console.log("Cannot connect");
    console.log("Connection OK");
    const db = client.db(dbname);
  
    db.collection('Users').insertOne({
      firstName: 'Johnny',
      lastName: 'Brown'
    }, (error, result) => {
      if (error)
        console.log('Cannot add user');
      console.log(result);
    })
  });
}


function rename_all_Johns_toToms() {
  mongoClient.connect(url, {}, (error, client) => {
    if(error)
      console.log("Cannot connect");
    console.log("Connection OK");
    const db = client.db(dbname);
    db.collection('Users').updateMany({
      firstName: 'John'
    }, {
      $set: {firstName: 'Tom'}
    }, (error, result) => {
      if(error)
        console.log('Cannot update users');
      console.log(result);
    })
  });
}



// delete
function delete_all_Johnny() {
  mongoClient.connect(url, {}, (error, client) => {
    if(error)
      console.log("Cannot connect");
    console.log("Connection OK");
    const db = client.db(dbname);
    db.collection('Users').deleteMany({
      firstName: 'Johnny'
    }, (error, result) => {
      if(error)
        console.log('Cannot delete users');
      console.log(result);
    })
  });
}
// delete_all_Johnny()