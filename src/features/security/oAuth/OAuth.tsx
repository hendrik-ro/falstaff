export default function OAuth() {
  return (
    <div>
      <h2>About</h2>
      <p>Authenticates the user via third-party provider (e.g. GitHub, Facebook or Google).</p>
      <ul>
        <li>
          <strong>Step 1:</strong> Redirect user to provider
        </li>
        <ul>
          <li>User authenticates with provider</li>
        </ul>
        <li>
          <strong>Step 2:</strong> User grants authorization
        </li>
        <ul>
          <li>User reviews and accepts permissions</li>
        </ul>
        <li>
          <strong>Step 3:</strong> Redirect user to application
        </li>
        <li>
          <strong>Step 4:</strong> Exchange for access grant
        </li>
        <ul>
          <li>Application requests access token from provider</li>
        </ul>
        <li>
          <strong>Step 5:</strong> Grant access token
        </li>
        <ul>
          <li>Provider generates access + refresh token</li>
        </ul>
        <li>
          <strong>Step 6:</strong> Create connection
        </li>
        <ul>
          <li>Application opens connection with the access token</li>
        </ul>
      </ul>
    </div>
  );
}
