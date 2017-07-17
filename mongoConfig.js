var mongoose = require("mongoose");

// Note to self:  See http://mongoosejs.com/docs/connections.html#use-mongo-client re: deprecation warning from terminal. . .here are the connect examples from docs:
// // Using `mongoose.connect`...
// var promise = mongoose.connect('mongodb://localhost/myapp', {
//   useMongoClient: true,
//   /* other options */
// });
// // Or `createConnection`
// var promise = mongoose.createConnection('mongodb://localhost/myapp', {
//   useMongoClient: true,
//   /* other options */
// });
// promise.then(function(db) {
//   /* Use `db`, for instance `db.model()`
// });
// // Or, if you already have a connection
// connection.openUri('mongodb://localhost/myapp', { /* options */ });


module.exports = mongoose.connect(process.env.MONGODB_URI || ("mongodb://heroku_q704sxx4:ifgiglkhn5je05sm3v3nt3othn@ds157342.mlab.com:57342/heroku_q704sxx4"), {useMongoClient: true});



 // mongoose.connect('mongodb://localhost/mydatabase',function(){
//     /* Drop the DB */
//     mongoose.connection.db.dropDatabase();
// });

// Note to self: Other attempts and notes.
// mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_q704sxx4:ifgiglkhn5je05sm3v3nt3othn@ds157342.mlab.com:57342/heroku_q704sxx4")

// var db = process.env.MONGODB_URI || "mongodb://heroku_q704sxx4:ifgiglkhn5je05sm3v3nt3othn@ds157342.mlab.com:57342/heroku_q704sxx4")
// //

// Heroku app
// powerful-citadel-49687
// MONGODB_URI: mongodb://heroku_q704sxx4:ifgiglkhn5je05sm3v3nt3othn@ds157342.mlab.com:57342/heroku_q704sxx4
