import ProductCard from "@/components/product/ProductCard";
import productService from "@/lib/services/productService";

export default async function Home() {
  const latestProducts = await productService.getLatest();
  return (
    <>
      <h2 className="text-2xl text-grayHoverColor">Latest Products</h2>
      <div className="grid grid-cols-4 gap-4">
        {latestProducts.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </>
  );
}
