export const discountedPrice = (price, discount) => {
  return Math.floor((price * (100 - Math.floor(discount))) / 100);
};

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

export const capitalise1stChar = (item) => {
  return item.slice(0, 1).toUpperCase() + item.slice(1, item.length);
};
