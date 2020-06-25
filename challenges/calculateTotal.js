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

function calculateTotal(items, options = {}) {
  if (items == null || items.length === 0) return 0;

  let total = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  total = total - total * (options.discount || 0);
  total = total * TAX_RATE;

  if (options.shipping && options.shipping > 0) {
    total = total + options.shipping;
  } else {
    total = total + SHIPPING_DEFAULT;
  }

  return Math.round(total);
}

console.log(calculateTotal(items, { shipping: 10, discount: 0.1 }));
console.log(calculateTotal(items, { shipping: 10 }));
console.log(calculateTotal(items, { shipping: 0 }));
console.log(calculateTotal(items, { discount: 0.1 }));
console.log(calculateTotal([], {}));
console.log(calculateTotal(items, {}));
console.log(calculateTotal(items));
