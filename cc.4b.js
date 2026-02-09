let products = [
  { sku: "E1001", name: "Smartphone", category: "electronics", price: 799.99, inventory: 25 },
  { sku: "A2001", name: "Jeans", category: "apparel", price: 49.99, inventory: 60 },
  { sku: "G3001", name: "Milk", category: "groceries", price: 3.49, inventory: 100 },
  { sku: "H4001", name: "Laundry Detergent", category: "household", price: 12.99, inventory: 40 },
  { sku: "B5001", name: "Notebook", category: "stationery", price: 5.99, inventory: 75 }
];
let discountRate = 0;

  switch (product.category) {
    case "electronics":
      discountRate = 0.20;
      break;

    case "apparel":
      discountRate = 0.15;
      break;

    case "groceries":
    case "household":
      discountRate = 0.10;
      break;

    default:
      discountRate = 0;
  }

  let discountedPrice = product.price - (product.price * discountRate);

  console.log(
    `${product.name} (${product.category}) - Original: $${product.price.toFixed(2)}, Discounted: $${discountedPrice.toFixed(2)}`
  );