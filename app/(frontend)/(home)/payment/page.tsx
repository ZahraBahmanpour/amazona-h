import CheckoutSteps from "@/components/CheckoutSteps";

export default function PaymentPage() {
  return (
    <div>
      <CheckoutSteps current={1} />
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Payment Method</h2>
          <label>
            PayPal
            <input
              type="radio"
              name="paypal"
              className="radio"
              defaultChecked
            />
            Stripe
            <input type="radio" name="stripe" className="radio" />
          </label>

          <div className="card-actions justify-end">
            <button className="btn btn-warning">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
