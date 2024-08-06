import { Product } from "@/lib/models/ProductModel";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return <div>{product.name}</div>;
}
