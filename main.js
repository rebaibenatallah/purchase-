// create cline page
let name = document.getElementById('name-client');
let credit = document.getElementById('credit');
let submit_client = document.getElementById('submit-client');

let description = document.getElementById('description');
let unit_price = document.getElementById('unit-price');
let submit_product = document.getElementById('submit-product');

// create table 
// ================================= clines
let clients ; 

if (localStorage.clients != null) {
    console.log("in if");
    clients = JSON.parse(localStorage.clients);
}else{
    console.log("in else");
    clients = [];
}

submit_client.onclick = function(){
    let client = {
        name:name.value,
        credit: credit.value,
    }
    clients.push(client);
    localStorage.setItem('clients', JSON.stringify(clients));
    console.log(clients);
}
// ================================= products
let products ; 
if (localStorage.products != null) {
    clines = JSON.parse(localStorage.products);
}else{
    products = [];
}

submit_product.onclick = function(){
    let product = {
        description:description.value,
        unit_price: unit_price.value,
    }
    products.push(product);
    localStorage.setItem('products', JSON.stringify(clines));
    console.log(clines);
}

//  show data
function showData()
{
    let table = '';
    for(let i = 0 ; i < clients.length;i++){
        table += '<div class="content"> <h3>client :</h3><h4>'+ clients[i].name  +' </h4><h3>credit :</h3><h4>'+ clients[i].credit  +'</h4></div>' ;
    }
    document.getElementById('main').innerHTML = table ;
}
showData();
function show(){
}
