require("newrelic");
const express = require("express");
const path = require("path");
const compression = require("compression");
const db = require("./db/querys.js");
const { dataGen } = require("./db/dataGenerator");
const { response } = require("express");

//Adds server / port setup
const PORT = process.env.PORT || 5000;
const app = express();

//adds middleware for all requests
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "dist")));

app.get("/main", async (req, res) => {
  await db.getId(req.query.id, (err, response) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(response);
    }
  });
});

app.get("/catName", async (req, res) => {
  await db.getCat(req.query.catName, (err, response) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(response);
    }
  });
});

//Broken - returns 5 random cats
// app.get("/fiveCats", async (req,res)=>{
//   let results = await db.getFiveCats(req.query.id,(err,response)=>{
//     if (err){
//       res.status(400).send(err);
//     } else {
//       res.status(200).send(response)
//     }
//   })
// })

/*
//read
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

//create
app.post('/main',(req,res)=>{
  db
    .createCat(req.query.catName,req.query.price,req.query.rating,req.query.category)
    .then(results =>{
      res.status(200).send('New Cat Created',results);
    })
    .catch(err=>{
      console.log(err);
      res.status(400).send(err);
    })
})



//update
app.put('/main',(req,res)=>{
  db
    .updateCat(req.query.catName,req.query.price,req.query.rating,req.query.category)
    .then(results =>{
      res.status(200).send('Cat Updated ',results);
    })
    .catch(err=>{
      console.log(err);
      res.status(400).send(err);
    })
})



//delete
app.delete('/main',(req,res)=>{
  db
    .deleteCat(req.query.catName)
    .then(results =>{
      res.status(200).send('Cat Deleted ',results);
    })
    .catch(err=>{
      console.log(err);
      res.status(400).send(err);
    })
})
*/

//start server on specified PORT
app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}.`);
});
