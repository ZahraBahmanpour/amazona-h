"use client";
import CheckoutSteps from "@/components/CheckoutSteps";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function ShippingPage() {
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/payment");
  };
  return (
    <div>
      <CheckoutSteps />
      <div className="flex justify-center">
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h2 className="card-title">Shipping Address</h2>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Full Name</span>
                </div>
                <input
                  id="fullName"
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label">
                  <span className="label-text">Address</span>
                </div>
                <input
                  id="address"
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label">
                  <span className="label-text">City</span>
                </div>
                <input
                  id="city"
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label">
                  <span className="label-text">Postal Code</span>
                </div>
                <input
                  id="postalCode"
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label">
                  <span className="label-text">Country</span>
                </div>
                <input
                  id="country"
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <div className="card-actions justify-center w-full">
                <button className="btn btn-warning" type="submit">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
