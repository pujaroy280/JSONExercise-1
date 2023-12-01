// Exercise: Parse JSON data into JavaScript Objects

/*
Objective: In this exercise, you'll work with JSON dummy data and use the JSON.parse() method to convert it into JavaScript objects.
Create a JSON file named dummyData.json with the following content:
Read the content of dummyData.json
Use JSON.parse() to parse the JSON data into JavaScript objects.
Log the parsed data to the console.
*/

// Sample JSON
/*
{
    "users": [
       {
         "id": 1,
         "name": "John Doe",
         "email": "john@example.com",
         "address": {
           "city": "New York",
           "zipcode": "10001"
         }
       }
    ],
    "products": [
       {
         "id": 101,
         "name": "Laptop",
         "price": 999.99
       },
       {
         "id": 102,
         "name": "Smartphone",
         "price": 499.99
       }
    ]
}
*/

// Load the JS File System module to interact with the file system
const fs = require('fs');
// Read the file synchronously and store the data in the variable 'parsedData'
const parsedData = fs.readFileSync('dummyData.json');
// Use JSON.parse() to parse the JSON data into a JSON objects
const jsonObj = JSON.parse(parsedData);
// Log the parsed JSON object data to the console.
console.log(jsonObj);

/* OUTPUT of the parsed data:
{
  users: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      address: [Object]
    }
  ],
  products: [
    { id: 101, name: 'Laptop', price: 999.99 },
    { id: 102, name: 'Smartphone', price: 499.99 }
  ]
}
*/
