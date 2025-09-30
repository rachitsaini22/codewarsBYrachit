// 9. Shopping Cart Discount
const cart = [
  { item: "Shoes", price: 2000, qty: 2 },
  { item: "T-shirt", price: 800, qty: 3 },
  { item: "Jeans", price: 1500, qty: 1 }
];
// 👉 Apply a 10% discount on total bill and return final amount.
function total(){
  let sum=0;
    for ( let i in cart){
       sum += ( cart[i].price * cart[i].qty);
    }
    return sum;
}
function main(){
console.log("total elements are ", total());
}
main();