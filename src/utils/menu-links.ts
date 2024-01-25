export interface IMenu {
  id: number;
  title: string;
  path: string;
}

const MENUS: IMenu[] = [
  { id: 1, title: "All", path: "" },
  { id: 2, title: "Fruits", path: "" },
  { id: 3, title: "Dairy", path: "" },
  { id: 4, title: "Breakfast", path: "" },
];

export default MENUS;
