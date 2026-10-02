export default function GrantTypes() {
  return (
    <div>
      <h2>Grant Types</h2>
      <div className="flexContainer">
        <div className="flexItem">
          <h3>Client credentials grant</h3>
          <p>Is used to access the application's own resources.</p>
          <p>The resource server and authentication server are the same.</p>
        </div>
        <div className="flexItem">
          <h3>Authorization code grant</h3>
          <p>The webserver must store the client's credentials securely.</p>
          <p>The resource server and authentication server are usually not the same.</p>
        </div>
        <div className="flexItem">
          <h3>Proof key for code exchange (PKCE)</h3>
          <p>
            PKCE is an extension to the Authorization Code flow, and it is used to prevent attacks
            and to securely perform the OAuth exchange from public clients. This extension helps
            prevent authorization code injection from malicious actors.
          </p>
        </div>
        <div className="flexItem">
          <h3>Device code grant</h3>
          <p>
            The Device Code Grant is used for devices that have no browser and/or have limited input
            capability to input an access token. Some examples of this might be smart TV apps.
          </p>
        </div>
        <div className="flexItem">
          <h3>Deprecated</h3>
          <ul>
            <li>Implicit grant</li>
            <li>Resource owner password credential grant</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
