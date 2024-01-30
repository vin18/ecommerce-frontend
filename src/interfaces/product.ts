export interface IProduct {
  _id?: string;
  name: string;
  price: number;
  description: string;
  image: {
    public_id: string;
    url: string;
  };
  discount?: string;
  countInStock: number;
  category: string;
  brand: string;
}
