var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Bamazondb"
})

connection.connect(function(err){ //error block: if error happens throw error sign and let me see whats wrong
if (err) throw err;
console.log("connected as id" + connection.threadId)
})

connection.query("SELECT * FROM products", function(err, res) {  //MYSQL workbench log info stuff 
  for (var i = 0; i < res.length; i++){
    console.log(res[i].item_id + " | " +  res[i].product_name + " | " + res[i].department_name + " | " + "$" + res[i].cost + " | ", res[i].stock_quantity);
  }
 for (var i = 0; i < res.length; i++){ //puts all item_ids into an array
    var choiceArray = [];
    choiceArray.push(res[i].item_id);
    console.log(choiceArray)
    }     
  console.log("-----------------------------------");
    connection.query("SELECT item_id AND product_name FROM products", function(err, res){
  inquirer. prompt({ //asking the user to include the item number of product they would like to buy
    name: "item_id",
    type: "input",
    message: "What item were you interested in buying? [Insert Item Number]",
    }).then(function(answer){   
    console.log(answer);
    console.log(res);
    })
  })
})


