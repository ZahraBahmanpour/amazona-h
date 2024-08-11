"use client";
import useCartService from "@/lib/hooks/useCartStore";
import Link from "next/link";

export default function Menu() {
  const { totalCount } = useCartService();
  return (
    <ul className="flex items-stretch gap-5">
      <li>
        <Link href={"/cart"} className="btn btn-ghost">
          Cart {totalCount ? totalCount : ""}
        </Link>
      </li>
      <li>
        <Link href={"/login"} className="btn btn-ghost">
          Login
        </Link>
      </li>
    </ul>
  );
}
