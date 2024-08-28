"use client";
import { FormEvent } from "react";

export default function LoginPage() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <br />
          <label>
            Password
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <div className="card-actions justify-end">
            <button type="submit" className="btn btn-warning w-full">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
