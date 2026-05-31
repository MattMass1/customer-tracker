const customers=[
    {name:"Alice",email:"Alice@123.com",purchases:["laptop","mouse","RAM"]},
    {name:"Bob",email:"Bob@123.com",purchases:["laptop", "phone"]},
    {name:"Mark",email:"Mark@123.com",purchases:["Desk","Camera"]}
];


customers.push({name:"Matthew",email:"Matthew@123.com", purchases:["tablet"]});
customers.shift();
console.log(customers);
