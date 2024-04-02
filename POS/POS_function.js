const productName = document.getElementById("productName");
const overallPrice = document.getElementById("totalPrice");

const products = [];
let totalPrice = 0;
function displayProduct(value, price){
    
    productName.textContent = value;
    products.push(value);
    console.log(products);
    
    totalPrice += price;
    overallPrice.textContent = `Total Price: ₱${totalPrice}.00`;

}

