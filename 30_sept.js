
const order = {
  id: 101,
  customer: "Kavya",
  items: [
    { product: "Book", price: 200, qty: 3 },
    { product: "Pen", price: 20, qty: 10 },
    { product: "Bag", price: 500, qty: 1 }
  ]
};
// 👉 Calculate the total amount of the order.
function main(){
console.log("total ammount for the given order is ", calculate())
}
main();
function calculate(){
    let ans= 0;
    for (let i in order.items){
 ans= order.items[i].price * order.items[i].qty+ans;
    }
    return ans;
}
