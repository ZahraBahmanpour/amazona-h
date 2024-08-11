import { create } from "zustand";
import { persist } from "zustand/middleware";
import { OrderItem } from "../models/OrderModel";

type Cart = {
  items: OrderItem[];
  totalPrice: number;
  totalCount: number;
};

const initialState: Cart = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};
export const cartStore = create<Cart>()(
  persist(() => initialState, { name: "cartStore" })
);

export default function useCartService() {
  const { items, totalPrice, totalCount } = cartStore();
  return {
    items,
    totalPrice,
    totalCount,
    increase: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug);

      const updatedCartItems = exist
        ? items.map((x) =>
            x.slug === item.slug ? { ...exist, qty: exist.qty + 1 } : x
          )
        : [...items, { ...item, qty: 1 }];

      const { totalPrice, totalCount } = updateCartInfo(items);
      cartStore.setState({ items: updatedCartItems, totalPrice, totalCount });
    },
    decrease: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug);
      if (!exist) return;

      const updatedCartItems =
        exist.qty === 1
          ? items.filter((x) => x.slug !== item.slug)
          : items.map((x) =>
              x.slug === item.slug ? { ...exist, qty: exist.qty - 1 } : x
            );

      const { totalPrice, totalCount } = updateCartInfo(items);
      cartStore.setState({ items: updatedCartItems, totalPrice, totalCount });
    },
    clear: () => {
      cartStore.setState({ items: [], totalCount: 0, totalPrice: 0 });
    },
  };
}

const updateCartInfo = (items: OrderItem[]) => {
  return {
    totalPrice: items.reduce((acc, x) => acc + x.price * x.qty, 0),
    totalCount: items.reduce((acc, x) => acc + x.qty, 0),
  };
};
