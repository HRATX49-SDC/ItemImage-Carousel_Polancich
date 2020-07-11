const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');
let counter = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

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
// dataGen();
