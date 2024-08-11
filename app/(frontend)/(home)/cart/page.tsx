"use client";
import useCartService from "@/lib/hooks/useCartStore";

// export const metadata = {
//   title: "Shopping Cart",
// };
export default function CartPage() {
  const { clear } = useCartService();
  return (
    <div>
      <button onClick={() => clear()}>Clear Cart</button>
    </div>
  );
}
