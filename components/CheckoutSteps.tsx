export default function CheckoutSteps({ current = 0 }) {
  return (
    <ul className="steps w-full mt-4">
      {["Shipping Address", "Payment Method", "Place Order"].map(
        (step, index) => (
          <li
            key={step}
            className={`step ${index <= current ? "step-warning" : ""}`}
          >
            {step}
          </li>
        )
      )}
    </ul>
  );
}
