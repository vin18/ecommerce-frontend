export interface IMenu {
  id: number;
  title: string;
  path: string;
}

const MENUS: IMenu[] = [
  { id: 1, title: "All", path: "/search" },
  { id: 2, title: "Headwear", path: "/search/headwear" },
  { id: 3, title: "Shirts", path: "/search/shirts" },
  { id: 4, title: "Shoes", path: "/search/shoes" },
];

export default MENUS;
