import { IProduct } from "@/interfaces/product";
import Image from "next/image";
import Link from "next/link";

const products: IProduct[] = [
  {
    _id: "1",
    name: "Mother Dairy Toned Fresh Milk",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    countInStock: 10,
    brand: "DAs",
  },

  {
    _id: "2",
    name: "Mother Dairy Toned Fresh Milk",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    countInStock: 10,
    brand: "DAs",
  },

  {
    _id: "3",
    name: "Mother Dairy Toned Fresh Milk",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    countInStock: 10,
    brand: "DAs",
  },

  {
    _id: "4",
    name: "Mother Dairy Toned Fresh Milk",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    countInStock: 10,
    brand: "DAs",
  },

  {
    _id: "5",
    name: "Mother Dairy Toned Fresh Milk",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    countInStock: 10,
    brand: "DAs",
  },

  {
    _id: "6",
    name: "Mother Dairy Toned Fresh Milk",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    countInStock: 10,
    brand: "DAs",
  },

  {
    _id: "7",
    name: "Mother Dairy Toned Fresh Milk",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    countInStock: 10,
    brand: "DAs",
  },

  {
    _id: "8",
    name: "Mother Dairy Toned Fresh Milk",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    countInStock: 10,
    brand: "DAs",
  },
];

function Product({ product }: { product: IProduct }) {
  return (
    <li className="shadow-2xl p-4 rounded cursor-pointer  bg-black  hover:border-gray-200 aspect-square transition-opacity animate-fadeIn">
      <Link href="/" className="relative inline h-full w-full">
        <div className="overflow-hidden">
          <Image
            className="hover:scale-105 transition duration-300"
            // src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&w=1200&q=75"
            src="https://images.meesho.com/images/products/326353038/tcsim_400.webp"
            width={300}
            height={300}
            alt=""
          />

          <p className="text-sm mt-2">{product.name}</p>

          <div className="flex items-center justify-between mt-2">
            <p>&#8377; 100</p>
            <button className="border border-gray-400 px-3 py-1 rounded">
              Add
            </button>
          </div>
        </div>
      </Link>
    </li>
  );
}

function ProductList() {
  return (
    <ul className="grid grid-flow-row gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product: IProduct) => (
        <Product key={product._id} product={product} />
      ))}
    </ul>
  );
}

export default function SearchPage({ products }: { products: IProduct[] }) {
  return (
    <>
      <ProductList />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { products },
  };
}
