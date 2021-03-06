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
    
  console.log("-----------------------------------");
  startBuying()
})  

var startBuying = function(){ //function that starts the buying process using inquire
  inquirer.prompt([
  {
    type: "input",
    message: "\n Product ID?",
    name: "item_id"
  },
  
]).then(function (answer) {
  console.log(answer.item_id); 
  id = answer.item_id;
  if(id){
    productByID();
    next = true;
  }
  if(next === true){
  howManyUnits(); 
  }
});


var howManyUnits = function(){ //inquirer function that asks how many units you would like to buy
inquirer.prompt([ 
    {
    type: "input",
    message: "How many units?",
    name: "Units"
    }   
]).then(function(answer){ 
  units = parseInt(answer.Units); 
  stockChecker();
});
}

var productByID = function(){ // SHOWS ITEM AND QUANTITY BY ID
connection.query('SELECT*FROM Products WHERE item_id=?',id, function(err,res){
    console.log('product_name: '+res[0].product_name +' '+' Quantity: '+res[0].stock_quantity);
    stock_quantity = res[0].stock_quantity;
    totalSales = res[0].TotalSales;
    price = res[0].Price;
  })
};


function stockChecker(){ //function used to check the rest of units left in stock
  if(units>stock_quantity){
    console.log('Not enoughs left in stock!');
  }else{
    purchaseTotal = units*price; //multiplies the amount of unts by the price of each unit
    totalSales += purchaseTotal;
    stock_quantity-=units;
    connection.query("UPDATE products SET ? WHERE ?", [{
      stock_quantity: stock_quantity,
      TotalSales: totalSales 
    }, {
      item_id: id
  }], function(err, res) {
    console.log('You bought ' + units + ' unit/s');
    console.log(stock_quantity + ' units left')

  })  
  }
}

}