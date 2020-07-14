const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');
const Papa = require('papaparse');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let counter = 0;
let randomCatFirstName = faker.name.firstName;
let randomPrice = faker.commerce.price;
let randomCatImg = faker.image.cats;

let randomCATegory = () => {
  const cats = ['Chonk','Floof','Adorable','Hairless'];
  let newCat = cats[getRandomInt(0,3)];
  return newCat;
};

const dataGen = () => {
  writer.pipe(fs.createWriteStream('data.csv'));
  for (var i = 0; i < 10000000; i++){
    writer.write({
      id: counter++,
      name: randomCatFirstName(),
      price: randomPrice(),
      img: randomCatImg(),
      category: randomCATegory(),
    })
  }
  writer.end();
  console.log('fin');
}
// dataGen(); //comment in to gen data


// const newfile = 'data-1594745847370.csv';
// const datafile = fs.createReadStream(newfile);
// let ArrayOfTestNames = [];
// Papa.parse(datafile,{
//   delimiter:',',
//   step: function(result){
//     ArrayOfTestNames.push(result.data);
//   },
//   download:true,
//   complete: function(results){
//     console.log('Finished with ',ArrayOfTestNames.length,' rows.')
//     writer.pipe(fs.createWriteStream('namesArrData.js'));
//     writer.write({ArrayOfTestNames});
//     writer.end();
//     console.log('Writer Finished')
//   }
// })

// Comment in to generate a file of an array of names
