import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

// export const categories = [
//   {
//     _id: uuid(),
//     categoryName: "Men",
//     description:
//       "literature in the form of prose, especially novels, that describes imaginary events and people",
//   },
//   {
//     _id: uuid(),
//     categoryName: "Women",
//     description:
//       "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
//   },
//   {
//     _id: uuid(),
//     categoryName: "Kids",
//     description:
//       "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
//   },
// ];

// export const categories = [
//   {
//     _id: uuid(),
//     categoryName: "smartphones",
//     thumbnail: "https://cdn.dummyjson.com/product-images/2/1.jpg",
//     description:
//       "A smartphone is a cellular telephone with an integrated computer and other features not originally associated with telephones, such as an operating system (OS), web browsing and the ability to run software applications.",
//   },
//   {
//     _id: uuid(),
//     categoryName: "laptops",
//     thumbnail: "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
//     description:
//       "Laptops are small, battery- or AC-powered personal computers (PCs) that are smaller than a briefcase.",
//   },
//   {
//     _id: uuid(),
//     categoryName: "fragrances",
//     thumbnail: "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
//     description:
//       "Fragrances are substances that have strong-smelling organic compounds that have pleasant odors. They are used in many products as a perfume.",
//   },
//   {
//     _id: uuid(),
//     categoryName: "skincare",
//     thumbnail: "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
//     description:
//       "Skincare is a set of practices and products that can help maintain the health of your skin, improve its appearance, and relieve skin conditions. ",
//   },
//   {
//     _id: uuid(),
//     categoryName: "groceries",
//     thumbnail: "https://cdn.dummyjson.com/product-images/22/thumbnail.jpg",
//     description:
//       "Groceries are food and other items purchased in a food store or supermarket",
//   },
//   {
//     _id: uuid(),
//     categoryName: "home-decoration",
//     thumbnail: "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg",
//     description:
//       "It is clearing and creating living spaces that are visually appealing and more attractive to the human eye. Its style of furnishing and decoration",
//   },
// ];

// export const categories = [
//   "smartphones",
//   "laptops",
//   "fragrances",
//   "skincare",
//   "groceries",
//   "home-decoration",
//   "furniture",
//   "tops",
//   "womens-dresses",
//   "womens-shoes",
//   "mens-shirts",
//   "mens-shoes",
//   "mens-watches",
//   "womens-watches",
//   "womens-bags",
//   "womens-jewellery",
//   "sunglasses",
//   "automotive",
//   "motorcycle",
//   "lighting",
// ];

export const categories = [
  {
    categoryName: "Beauty",
    slug: "beauty",
    url: "https://dummyjson.com/products/category/beauty",
  },
  {
    categoryName: "Fragrances",
    slug: "fragrances",
    url: "https://dummyjson.com/products/category/fragrances",
  },
  {
    categoryName: "Furniture",
    slug: "furniture",
    url: "https://dummyjson.com/products/category/furniture",
  },
  {
    categoryName: "Groceries",
    slug: "groceries",
    url: "https://dummyjson.com/products/category/groceries",
  },
  {
    categoryName: "Home Decoration",
    slug: "home-decoration",
    url: "https://dummyjson.com/products/category/home-decoration",
  },
  {
    categoryName: "Kitchen Accessories",
    slug: "kitchen-accessories",
    url: "https://dummyjson.com/products/category/kitchen-accessories",
  },
  {
    categoryName: "Laptops",
    slug: "laptops",
    url: "https://dummyjson.com/products/category/laptops",
  },
  {
    categoryName: "Mens Shirts",
    slug: "mens-shirts",
    url: "https://dummyjson.com/products/category/mens-shirts",
  },
  {
    categoryName: "Mens Shoes",
    slug: "mens-shoes",
    url: "https://dummyjson.com/products/category/mens-shoes",
  },
  {
    categoryName: "Mens Watches",
    slug: "mens-watches",
    url: "https://dummyjson.com/products/category/mens-watches",
  },
  {
    categoryName: "Mobile Accessories",
    slug: "mobile-accessories",
    url: "https://dummyjson.com/products/category/mobile-accessories",
  },
  {
    categoryName: "Motorcycle",
    slug: "motorcycle",
    url: "https://dummyjson.com/products/category/motorcycle",
  },
  {
    categoryName: "Skin Care",
    slug: "skin-care",
    url: "https://dummyjson.com/products/category/skin-care",
  },
  {
    categoryName: "Smartphones",
    slug: "smartphones",
    url: "https://dummyjson.com/products/category/smartphones",
  },
  {
    categoryName: "Sports Accessories",
    slug: "sports-accessories",
    url: "https://dummyjson.com/products/category/sports-accessories",
  },
  {
    categoryName: "Sunglasses",
    slug: "sunglasses",
    url: "https://dummyjson.com/products/category/sunglasses",
  },
  {
    categoryName: "Tablets",
    slug: "tablets",
    url: "https://dummyjson.com/products/category/tablets",
  },
  {
    categoryName: "Tops",
    slug: "tops",
    url: "https://dummyjson.com/products/category/tops",
  },
  {
    categoryName: "Vehicle",
    slug: "vehicle",
    url: "https://dummyjson.com/products/category/vehicle",
  },
  {
    categoryName: "Womens Bags",
    slug: "womens-bags",
    url: "https://dummyjson.com/products/category/womens-bags",
  },
  {
    categoryName: "Womens Dresses",
    slug: "womens-dresses",
    url: "https://dummyjson.com/products/category/womens-dresses",
  },
  {
    categoryName: "Womens Jewellery",
    slug: "womens-jewellery",
    url: "https://dummyjson.com/products/category/womens-jewellery",
  },
  {
    categoryName: "Womens Shoes",
    slug: "womens-shoes",
    url: "https://dummyjson.com/products/category/womens-shoes",
  },
  {
    categoryName: "Womens Watches",
    slug: "womens-watches",
    url: "https://dummyjson.com/products/category/womens-watches",
  },
];
