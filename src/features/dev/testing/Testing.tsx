export default function Testing() {
  return (
    <div>
      <h2>Testing</h2>
      <h3>Software testing types</h3>
      <ul>
        <li>
          <strong>Unit testing</strong> - Tests individual functions/classes in isolation. Fast,
          cheap, run on every commit. Use case: validating a pricing calculation function.
        </li>
        <li>
          <strong>Integration testing</strong> - Tests how components work together (e.g., service +
          database). Use case: verifying an API correctly persists orders.
        </li>
        <li>
          <strong>System / End-to-end (E2E) testing</strong> - Tests the whole application as a user
          would. Slow but realistic. Use case: checkout flow from login to payment.
        </li>
      </ul>
    </div>
  );
}
