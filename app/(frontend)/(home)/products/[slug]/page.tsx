import Rating from "@/components/product/Rating";
import productService from "@/lib/services/productService";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { slug: string };
};
export default async function ProductDetailsPage({ params }: Props) {
  const product = await productService.getBySlug(params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }
  const {
    image,
    name,
    rating,
    numReviews,
    brand,
    description,
    price,
    countInStock,
  } = product;
  return (
    <div className="my-2">
      <Link href="/">back to products</Link>
      <div className="grid grid-cols-4">
        <div className="col-span-2">
          <Image src={image} alt={name} width={640} height={640} />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-xl">name</h1>
            </li>
            <li>
              <Rating rating={rating} numReviews={numReviews} />
            </li>
            <li>{brand}</li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              Description: <p>{description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card bg-base-300">
            <div className="card-body">
              <div className="flex justify-between mb-2">
                <h1>Price</h1>
                <div>${price}</div>
              </div>

              <div className="flex justify-between">
                <h1>Status</h1>
                <div>{countInStock > 0 ? "In Stock" : "Unavailable"}</div>
              </div>

              {countInStock !== 0 && (
                <div className="card-actions">
                  <button className="btn btn-warning w-full">
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
