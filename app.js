const data = require('./list.json');
const chalk= require('chalk-v2');

//reponse server en couleur
const say = chalk.greenBright.bgGray.bold('hello i\'m server node.js version 12.16.1');
const coffee = chalk.yellowBright.bgGray.bold('voulez-vous un café ?');
console.log(say);
console.log(coffee);

//object js
const obj = {
      name: 'olygood',
      age: 25,
      job: 'developer'
   };
const conversion = JSON.stringify( obj );
console.log( conversion );
const changeObj = JSON.parse( conversion);
console.log( changeObj );


// json file
   const jsonFile = {
      "name":"olygood",
      "age":25,
      "job":"developer"
};
console.log(data);
console.log(data.age);
