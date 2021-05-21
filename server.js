// const http = require('http');
// const server = http.createServer((req, res) => {
//     // console.log(req);
//     console.log(req.method);
//     const { headers, url, method } = req;
//     console.log(headers);
//     console.log(url);
//     console.log(method);
//     res.setHeader('Content-Type', 'application.json');
//     res.end(JSON.stringify({status:200,message:"my first api"}
//     ));
// });
// const PORT = 5000;
// server.listen(PORT, () => console.log('Server running on ${PORT}'));

var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(5000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("localhost:5000", host, port)
})