import Link from "next/link";
import Logo from "@/components/Logo";
import OpenCart from "@/components/cart/open-cart";
import MENUS, { IMenu } from "@/utils/menu-links";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 lg:px-6">
      {/* TODO: Add mobile menu */}
      {/* <div>
        <p>Mobile Menu</p>
      </div> */}
      <div className="flex items-center">
        <Link href="/" className="mr-10 flex items-center">
          <Logo />
          <p className="ml-2">Flipkart</p>
        </Link>

        {MENUS.length !== 0 && (
          <ul className="hidden gap-6 text-sm md:flex md:items-center">
            {MENUS.map((menu: IMenu) => (
              <li key={menu.id}>
                <Link
                  href={menu.path}
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* TODO: Add search
      <div>
        <input type="text" placeholder="Search here.." />
      </div> */}

      <div>
        <OpenCart />
      </div>
    </nav>
  );
}
