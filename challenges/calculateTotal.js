const items = [
  { name: 'thing1', price: 10, quantity: 2 },
  { name: 'thing2', price: 5, quantity: 10 },
  { name: 'thing3', price: 20, quantity: 2 },
  { name: 'thing4', price: 30, quantity: 1 },
  { name: 'thing5', price: 15, quantity: 3 },
  { name: 'thing6', price: 10, quantity: 5 },
];

const TAX_RATE = 1.15;
const SHIPPING_DEFAULT = 5;

function calculateTotal(
  items,
  { shippping = SHIPPING_DEFAULT, discount = 0 } = {}
) {
  if (items == null || items.length === 0) return 0;

  let subTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discountRate = 1 - discount;

  const total = subTotal * discountRate * TAX_RATE + shippping;

  return total.toFixed(2);
}

console.log(calculateTotal(items, { shipping: 10, discount: 0.1 }));
console.log(calculateTotal(items, { shipping: 10 }));
console.log(calculateTotal(items, { shipping: 0 }));
console.log(calculateTotal(items, { discount: 0.1 }));
console.log(calculateTotal([], {}));
console.log(calculateTotal(items, {}));
console.log(calculateTotal(items));
