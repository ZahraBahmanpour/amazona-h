"use client";
import AddToCart from "@/components/product/AddToCart";
import useCartService from "@/lib/hooks/useCartStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Shopping Cart",
// };
export default function CartPage() {
  const { clear, items, totalPrice, totalCount } = useCartService();
  const router = useRouter();
  return (
    <div>
      <h1>Shopping Cart</h1>
      {items.length === 0 ? (
        <div>
          Cart is empty
          <Link href={"/"}>Go Shopping</Link>
        </div>
      ) : (
        <div className="overflow-x-auto grid grid-cols-4 gap-5">
          <table className="table col-span-3">
            {/* head */}
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <Link href={`/products/${item.slug}`}>
                            <img src={item.image} alt={item.name} />
                          </Link>
                        </div>
                      </div>
                      <div>
                        <Link href={`/products/${item.slug}`}>
                          <div className="font-bold">{item.name}</div>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td>
                    <AddToCart item={item} />
                  </td>
                  <td>${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="card bg-base-300 mb-4 p-5">
            <h1 className="text-xl">
              Subtotal({totalCount}): ${totalPrice}
            </h1>
            <button
              className="btn btn-warning w-full"
              onClick={() => router.push("/shipping")}
            >
              Place order
            </button>
          </div>
        </div>
      )}
      <button onClick={() => clear()}>Clear Cart</button>
    </div>
  );
}
