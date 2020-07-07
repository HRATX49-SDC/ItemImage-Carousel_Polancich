const express = require('express');
const path = require('path');
const compression = require('compression')
const db = require('./db/querys.js');

//Adds server / port setup
const PORT = process.env.PORT || 5000;
const app = express();

//adds middleware for all requests
app.use(compression());
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(express.static(path.join(__dirname, 'client', 'dist')));


//request routing
app.get('/main', (req, res) => {
  //use db functions to retrieve a cat
  db
    .getCat(req.query.catName)
    .then(results => {
      //restructure the results to send back to the client
      let cat = results[0];
      cat.url = [cat.url]
      for(let i = 1; i < results.length; i++) {
        cat.url.push(results[i].url)
      }
      //send the restrucured results to the client
      res.status(200).send(cat);
    })
    .catch(err => {
      //if there is an error, log it for debugging and send the error code
      console.log(err);
      res.sendStatus(404);
    })
})

//start server on specified PORT
app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}.`)
})