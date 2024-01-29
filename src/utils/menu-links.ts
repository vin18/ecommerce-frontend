export interface IMenu {
  id: number;
  title: string;
  path: string;
}

const MENUS: IMenu[] = [
  { id: 1, title: "All", path: "/search" },
  { id: 2, title: "Headwear", path: "headwear" },
  { id: 3, title: "Shirts", path: "/shirts" },
  { id: 4, title: "Drinkware", path: "/drinkware" },
];

export default MENUS;
