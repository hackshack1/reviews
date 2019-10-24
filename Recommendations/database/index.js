var mysql = require('mysql');
const request = require('request');
var parseString = require('xml2js').parseString;


var connection = mysql.createConnection({   
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'recommendations' 
});
 
connection.connect(() => console.log('DATABASE IS CONNECTING'));  

module.exports = connection; 

// var xml;
// var xmlArr;

// request('http://s3-us-west-1.amazonaws.com/air6n6pictures', function(error, response, body) {
//   console.log('error', error);
//   console.log('statusCode', response && response.StatusCode); 
//   xml = body
//   // console.log('xml', xml)
//   parseString(xml, function(err, results){ 
//     // console.log(results.ListBucketResult.Contents)
//     xmlArr = results.ListBucketResult.Contents
//   })

// });

// https://air6n6pictures.s3-us-west-1.amazonaws.com/   append key 1.png