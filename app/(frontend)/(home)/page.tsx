import ProductCard from "@/components/product/ProductCard";
import data from "@/lib/data/data";

export default function Home() {
  return (
    <>
      <h2 className="text-2xl text-grayHoverColor">Latest Products</h2>
      <div>
        {data.products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </>
  );
}
