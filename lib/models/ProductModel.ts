export type Product = {
  _id?: string;
  name: string;
  slug: string;
  image: string;
  banner?: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  description?: string;
  category: string;
  isFeatured?: boolean;
};
