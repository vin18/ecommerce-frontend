import { IProduct } from "@/interfaces/product";

const products: IProduct[] = [
  {
    _id: "1",
    name: "Sneaky Shoes",
    price: 300000,
    image: {
      public_id:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&w=1200&q=75",
      url: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&w=1200&q=75",
    },
    description:
      "Sleek, easy, and effortlessly stylish. Acme Slip-On Shoes are the ultimate get-up-and-go footwear. The low-profile slip-on canvas upper offers unbeatable convenience, while the clean design makes this all-white slip-on the perfect choice for anyone with places to go and things to do. One of the most popular designs, these shoes are the perfect middle ground between style and convenience.",
    category: "shoes",
    countInStock: 10,
    brand: "Puma",
  },
  {
    _id: "2",
    name: "Prism T-Shirt",
    price: 120000,
    image: {
      public_id:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&w=384&q=75",
      url: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&w=384&q=75",
    },
    description: "60% combed ringspun cotton/40% polyester jersey tee.",
    category: "shirts",
    countInStock: 4,
    brand: "Arrow",
  },
  {
    _id: "3",
    name: "Circles T-Shirt",
    price: 150000,
    image: {
      public_id:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=384&q=75",
      url: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=384&q=75",
    },
    description: "60% combed ringspun cotton/40% polyester jersey tee.",
    category: "shirts",
    countInStock: 6,
    brand: "Arrow",
  },
  {
    _id: "4",
    name: "Baby Hat",
    price: 50000,
    image: {
      public_id:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&w=640&q=75",
      url: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&w=640&q=75",
    },
    description: "100% combed ringspun cotton",
    category: "hat",
    countInStock: 6,
    brand: "Blackbox",
  },
  {
    _id: "5",
    name: "Cowboy Hat",
    price: 70000,
    image: {
      public_id:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcowboy-hat-black-1.png%3Fv%3D1690208765&w=640&q=75",
      url: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcowboy-hat-black-1.png%3Fv%3D1690208765&w=640&q=75",
    },
    description:
      "Part of our Buffalo collection, this cowboy hat is made in the USA of high-quality, weather-resistant 4X buffalo felt. Its classic Western profile features a classic cattleman crease, and a self-matching hat band with a three-piece silver-toned buckle set, as well as a hat box.",
    category: "hat",
    countInStock: 6,
    brand: "Blackbox",
  },
  {
    _id: "6",
    name: "Cap",
    price: 80000,
    image: {
      public_id:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhat-1.png%3Fv%3D1690002833&w=640&q=75",
      url: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhat-1.png%3Fv%3D1690002833&w=640&q=75",
    },
    description:
      "Part of our Buffalo collection, this cowboy hat is made in the USA of high-quality, weather-resistant 4X buffalo felt. Its classic Western profile features a classic cattleman crease, and a self-matching hat band with a three-piece silver-toned buckle set, as well as a hat box.",
    category: "hat",
    countInStock: 6,
    brand: "Blackbox",
  },
];

export default products;
