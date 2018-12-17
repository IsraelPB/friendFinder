const faker = require("faker");
const axios = require ("axios");

// crea 100 usarios falsos 

let totalNumberOfUsers = 100;
let friends =[];

for (let i =0; i <totalNumberOfUsers; i++){
    //random dog api hahahah :P because who doesn't love dogs!! screw cats! hahah anywho.. on to the code
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
      friends.push({
        name: [faker.name.firstName(), faker.name.lastName()].join(' '),
        jobTitle: faker.name.jobTitle(),
        phoneNumber: faker.phone.phoneNumber(),
        photo: response.data.message,
        scores: [1,2,3,4,5,6,7,8,9,10].map(d => Math.ceil(Math.random()*5))
      })
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  
  module.exports = friends;
  