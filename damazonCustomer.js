var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "root",
  database: "damazon_db"
});

console.log("Welcome to Damazon-The virtual giftshop for Hoover Dam!");

connection.query('SELECT * FROM Products', function(err, res) {
if (err) {
  
  console.error("eror connect: " + err.stack);

}
 makeTable();
});


var makeTable = function() {

  
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    var tab = "\t";
    console.log("ItemID\tProduct Name\tDepartment Name\tPrice\t# In Stock");
    console.log("--------------------------------------------------------");

   
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + tab + res[i].product_name + tab +
        res[i].department_name + tab + res[i].price + tab + res[i].stock_quantity);
    }
    console.log("--------------------------------------------------------");

    promptCustomer(res);
  });

};

var promptCustomer = function(res) {

  inquirer.prompt([{
    type: "input",
    name: "choice",
    message: "What would you like as a momento of your day at the dam? [Quit with Q]"
  }]).then(function(val) {
    var correct = false;

    for (var i = 0; i < res.length; i++) {
      if (res[i].product_name === val.choice) {
        correct = true;
        var product = val.choice;
        var id = i;

        inquirer.prompt([{
          type: "input",
          name: "quant",
          message: "How many would you like to purchase?"
        }]).then(function(val) {

          
          if ((res[id].stock_quantity - val.quant) > 0) {
                 connection.query(
              "UPDATE products SET stock_quantity='" + (res[id].stock_quantity - val.quant) +
              "' WHERE product_name='" + product + "'",
              function(err, res2) {
                  if (err) {
                  throw err;
                }
                console.log("SUCCESS-PRODUCT BOUGHT! Is there anything else that you'd like to purchase?");

                makeTable();
              });
          } else {
            console.log("NOT A VALID SELECTION-PLEASE TRY AGAIN!");
            promptCustomer(res);
          }
        });
      
      } if(val.choice === "Q" || val.choice === "q") {
        process.exit();
      }
   
    } if(i === res.length && correct === false) {
       console.log("NOT A VALID SELECTION");
       promptCustomer(res);
     }
  });
};


    
    

   