"use client";
import useCartService from "@/lib/hooks/useCartStore";
import { OrderItem } from "@/lib/models/OrderModel";

type Props = {
  item: OrderItem;
};
export default function AddToCart({ item }: Props) {
  const { increase, items, decrease } = useCartService();
  const existItem = items.find((x) => x.slug === item.slug);
  return existItem ? (
    <>
      <button onClick={() => decrease(item)}>-</button>
      <span>{existItem.qty}</span>
      <button onClick={() => increase(item)}>+</button>
    </>
  ) : (
    <button className="btn btn-warning w-full" onClick={() => increase(item)}>
      Add to Cart
    </button>
  );
}
