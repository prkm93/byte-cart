export const discountedPrice = (price, discount) => {
  return Math.floor((price * (100 - Math.floor(discount))) / 100);
};

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});
