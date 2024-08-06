import { Product } from "@/lib/models/ProductModel";
import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { slug, image, name, brand, price, rating, numReviews } = product;
  return (
    <div className="card bg-base-300 mb-4">
      <figure>
        <Link href={`/products/${slug}`}>
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="w-full h-64"
          />
        </Link>
      </figure>
      <div className="card-body text-grayHoverColor">
        <Link href={`/products/${slug}`}>
          <h2 className="card-title">{name}</h2>
        </Link>
        <Rating rating={rating} numReviews={numReviews} />
        <p className="mb-2">{brand}</p>
        <div className="card-actions">
          <span className="text-2xl">${price}</span>
        </div>
      </div>
    </div>
  );
}
