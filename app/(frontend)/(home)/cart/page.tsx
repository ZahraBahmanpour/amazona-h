"use client";
import useCartService from "@/lib/hooks/useCartStore";
import Link from "next/link";

// export const metadata = {
//   title: "Shopping Cart",
// };
export default function CartPage() {
  const { clear, items } = useCartService();
  return (
    <div>
      <h1>Shopping Cart</h1>
      {items.length === 0 ? (
        <div>
          Cart is empty
          <Link href={"/"}>Go Shopping</Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
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
                  <td>{item.qty}</td>
                  <td>${item.price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <button onClick={() => clear()}>Clear Cart</button>
    </div>
  );
}
