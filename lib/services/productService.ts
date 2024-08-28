import { desc, eq } from "drizzle-orm";
import db from "@/db/drizzle";
import { products } from "@/db/schema";

const getLatest = async () => {
  const data = db.query.products.findMany({
    orderBy: [desc(products.createdAt)],
    limit: 6,
  });
  return data;
};

const getBySlug = async (slug: string) => {
  const data = db.query.products.findFirst({
    where: eq(products.slug, slug),
  });
  return data;
};

const productService = { getLatest, getBySlug };
export default productService;
