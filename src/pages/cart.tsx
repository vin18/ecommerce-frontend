import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function CartPage() {
  const isCartEmpty = true;

  return (
    <div className="flex items-center justify-between p-4 lg:px-6">
      {isCartEmpty ? (
        <div className="flex flex-col items-center w-full mt-16">
          <ShoppingCartIcon className="w-16 h-16" />
          <p className="text-3xl mb-4">Your cart is empty</p>
          <Link href="/search">
            <button className="border px-4 py-2 rounded">
              Browse products
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
