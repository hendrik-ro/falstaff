export default function AuthenticationSessions() {
  return (
    <div>
      <h2>Cookie-bases sessions</h2>
      <p>
        Whilst a server holds a session state, the client keeps a session ID in a cookie. On each
        request, the cookie is automatically attached as an HTTP header.
      </p>
      <br style={{ marginTop: "1rem" }} />
      <table>
        <caption>Cookie Attributes</caption>
        <tbody>
          <tr>
            <td scope="row">
              <code>HttpOnly</code>
            </td>
            <td>Blocks JavaScript access and prevents XSS cookie theft</td>
          </tr>
          <tr>
            <td scope="row">
              <code>Secure</code>
            </td>
            <td>Only sent over HTTPS</td>
          </tr>
          <tr>
            <td scope="row">
              <code>SameSite= Lax | Strict</code>
            </td>
            <td>Blocks CSRF by limiting cross-site sending</td>
          </tr>
          <tr>
            <td scope="row">
              <code>Max-Age / Expires</code>
            </td>
            <td>Controlls session lifetime</td>
          </tr>
          <tr>
            <td scope="row">
              <code>Path=/; Domain</code>
            </td>
            <td>Scope where the cookie is sent</td>
          </tr>
        </tbody>
      </table>
      <br style={{ marginTop: "1rem" }} />
      <h3>Workflow</h3>
      <ol>
        <li>Client calls server</li>
        <li>Server creates a session ID</li>
        <li>The server response tells client to store a cookie with session ID</li>
        <li>Client automatically attaches session ID in subsequent requests</li>
        <li>Server returns session specific content</li>
        <li>Process continues as long as session is active</li>
        <li>
          The session is terminated after set expiration time, the browser is closed, or the user
          logs out
        </li>
      </ol>
    </div>
  );
}
