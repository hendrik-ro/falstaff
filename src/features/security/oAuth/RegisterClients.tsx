import Syntax from "../../../components/SyntaxHighlighter";

export default function RegisterClients() {
  return (
    <div>
      <h2>Registering clients</h2>
      <p>
        <em>oAuth 2.0</em> differentiates between:
      </p>
      <ul>
        <li>
          <strong>Public clients</strong>: cannot store credentials securely and can not use grany
          types that store their client secrets.
        </li>
        <li>
          <strong>Confidential clients</strong>: applications that use an authorization server to
          register their clients' credentials.
        </li>
      </ul>
      <p>
        To register a client in <em>oAuth 2.0</em>, a <code>clientId</code> and{" "}
        <code>clientSecret</code> are needed.
      </p>
      <br style={{ marginTop: "1rem" }} />
      <p>An in-memory example of a authorization database could look like this:</p>
      <Syntax
        language="typescript"
        code={`// types.ts
export interface ConfidentialClient {
  clientId: string;
  clientSecret: string;
  grants: Grant[];
}

export type Grant = 'client_credentials' | 'authorization_code' | 'refresh_token';

export interface OAuthConfig {
  confidentialClients: ConfidentialClient[];
  /** opaque token strings (or swap for a richer Token interface if needed) */
  tokens: string[];
}

// config.ts
export const oauthConfig: OAuthConfig = {
  confidentialClients: [
    {
      clientId: 'my-application',
      clientSecret: process.env.APP_CLIENT_SECRET || 'devSecret123',
      grants: ['client_credentials'],
    },
  ],
  tokens: [],
};

export default oauthConfig;
`}
        lineNumbers={true}
      />
    </div>
  );
}
