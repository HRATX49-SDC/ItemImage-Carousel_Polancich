const { resolve } = require('path');
const { rejects } = require('assert');
const cassandra = require('cassandra-driver');
const { connect } = require('http2');
//===============================
// Cassandra BEGIN
//===============================
const client = new cassandra.Client({
  contactPoints: ['127.0.0.1:9042'],
  localDataCenter: 'datacenter1',
  keyspace: 'hratxtar'
});
 

client.connect((err) => {
  if(err) {
    console.log('Error connecting to Cassandra:');
  } else {
    console.log('Cassandra is off or failed to connect');
  }
})
//===============================

// const query = 'SELECT * from cats where id=9999999';
 
// client.execute(query)
// .then(result => console.log('Name of query id',result.rows[0].id,': ',result.rows[0].name))

let query = {
  individualCatByCatName:'SELECT * from catsbyname where name=?',
  byID:'SELECT * from cats where id=?',
  getFiveCats:"Select * FROM cats where id>=? ALLOW FILTERING"
}

 client.getId = (id,cb) =>{
   console.log('Getting Row by id of ',id)
   let params = [id]
   client.execute(query.byID,params, {prepare: true})
   .then(result =>{
     console.log('here are the results in db',result)
     let response = result.rows[0];
     cb(null,response);
   })
   .catch(error =>{
     console.log('error in DB getCat',error);
     cb(error,null);
   })
 }


 client.getCat = (catName,cb) =>{
  console.log('Getting Cat ',catName)
  let params = [catName]
  client.execute(query.individualCatByCatName,params, {prepare: true})
  .then(result =>{
    console.log('here are the results in db',result)
    let response = result.rows;
    cb(null,response);
  })
  .catch(error =>{
    console.log('error in DB getCat',error);
    cb(error,null);
  })
}











 //===============================
 //Broken -- Gets 5 random cats above specified value --
//  client.getFiveCats = (id,cb) =>{
//    console.log('Getting 5 Row starting at id of ',id);
//   let params = [id]
//   client.execute(query.getFiveCats,params, {prepare: true})
//   .then(result =>{
//     console.log('here are the results in db',result)
//     let response = result.rows;
//     cb(null,response);
//   })
//   .catch(error =>{
//     console.log('error in DB getFiveCats',error);
//     cb(error,null);
//   })
// }
//===============================

/*
Standard CRUD Routes with MySql


// read
connection.getCat = catName => {
  console.log('This is catName',catName)
  return new Promise ((resolve, reject) => {
    connection.query('SELECT * FROM cats INNER JOIN images ON (cats.catName=(?) AND cats.id=images.cat_id) INNER JOIN catType ON (catType.id = cats.category_id)', catName, (err, results) => { //Verified
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// update based on catName
connection.updateCat = (catName,price,rating,category) => {
  return new Promise ((resolve,reject)=>{
    connection.query('UPDATE cats SET price=(?),rating=(?),category_id=(?) WHERE cats.catName=(?)',[price,rating,category,catName],(err,results)=>{ //Verified 
      if (err){
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
}


// delete
connection.deleteCat = catName => {
  return new Promise ((resolve, reject)=>{
    connection.query('DELETE FROM cats WHERE cats.catName=(?)',[catName],(err,results)=>{ // Verified
      if (err){
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
}


// create
connection.createCat = (catName,price,rating,category) => {
  return new Promise ((resolve,reject)=>{ // write a query for when a cat is born
    connection.query('INSERT INTO cats(catName,price,rating,category_id) VALUES(?,?,?,?)',[catName,price,rating,category],(err,results)=>{ //Verified
      if(err){
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
}

*/
module.exports = client;
