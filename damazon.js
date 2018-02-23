var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "damazon_db"
});

console.log("welcome to Damazon!");


connection.connect(function(err) {
  if (err) throw err;

  //start();
});

function start (){
   inquirer
  .promt({
     name: "placeOrder",
     type: "rawlist",
     message: "Welcome to damazon! Would you like to [ORDER] an item or would you like to view our [INVENTORY]?",
     choices: ["ORDER", "INVENTORY"]

  })
 .then(function(answer){
  if(answer.placeOrder.toUpperCase()==="ORDER"){
     placeOrder();
  }
  else {
   showInventory();
  }
 });




