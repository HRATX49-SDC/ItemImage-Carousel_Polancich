"use strict";

var express = require('express');

var path = require('path');

var compression = require('compression');

var db = require('./db/querys.js');

var _require = require('./db/dataGenerator'),
    dataGen = _require.dataGen; //Adds server / port setup


var PORT = process.env.PORT || 5000;
var app = express(); //adds middleware for all requests

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express["static"](path.join(__dirname, 'client', 'dist'))); //read
//request routing

app.get('/main', function (req, res) {
  //use db functions to retrieve a cat
  db.getCat(req.query.catName).then(function (results) {
    //restructure the results to send back to the client
    var cat = results[0];
    cat.url = [cat.url];

    for (var i = 1; i < results.length; i++) {
      cat.url.push(results[i].url);
    } //send the restrucured results to the client


    res.status(200).send(cat);
  })["catch"](function (err) {
    //if there is an error, log it for debugging and send the error code
    console.log(err);
    res.sendStatus(404);
  });
}); //create

app.post('/main', function (req, res) {
  db.createCat(req.query.catName, req.query.price, req.query.rating, req.query.category).then(function (results) {
    res.status(200).send('New Cat Created', results);
  })["catch"](function (err) {
    console.log(err);
    res.status(400).send(err);
  });
}); //update

app.put('/main', function (req, res) {
  db.updateCat(req.query.catName, req.query.price, req.query.rating, req.query.category).then(function (results) {
    res.status(200).send('Cat Updated ', results);
  })["catch"](function (err) {
    console.log(err);
    res.status(400).send(err);
  });
}); //delete

app["delete"]('/main', function (req, res) {
  db.deleteCat(req.query.catName).then(function (results) {
    res.status(200).send('Cat Deleted ', results);
  })["catch"](function (err) {
    console.log(err);
    res.status(400).send(err);
  });
}); //start server on specified PORT

app.listen(PORT, function () {
  console.log("Express is listening on port ".concat(PORT, "."));
});
