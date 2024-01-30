import useSWR from "swr";
import { IProduct } from "@/interfaces/product";
import Image from "next/image";
import Link from "next/link";
import Error from "next/error";
import { fetcher } from "@/utils/fetcher";

function Product({ product }: { product: IProduct }) {
  return (
    <li className="shadow-2xl p-4 rounded-md cursor-pointer  bg-black  hover:border-gray-200 aspect-square transition-opacity animate-fadeIn">
      <Link
        href={`/product/${product._id}`}
        className="relative flex flex-col h-full w-full"
      >
        <div className="overflow-hidden">
          <Image
            className="hover:scale-105 transition duration-300"
            src={product.image.url}
            width={300}
            height={300}
            alt={product.name}
          />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm mt-2">{product.name}</p>
          <p>&#8377; {product.price / 100}</p>
        </div>
      </Link>
    </li>
  );
}

function ProductList() {
  const { data, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
    fetcher
  );

  if (isLoading) return <p>Loading..</p>;

  const { data: products = [] } = data;

  return (
    <ul className="grid grid-flow-row gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product: IProduct) => (
        <Product key={product._id} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;
