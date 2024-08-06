import data from "../data/data";

const getLatest = async () => {
  return data.products;
};

const getBySlug = async (slug: string) => {
  return data.products.find((p) => p.slug === slug);
};

const productService = { getLatest, getBySlug };
export default productService;
