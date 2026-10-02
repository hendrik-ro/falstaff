import Syntax from "../../../components/SyntaxHighlighter";

export default function OAuthModel() {
  return (
    <div>
      <h2>Model</h2>
      <p>
        <em>oAuth 2.0</em> requires the following functions to be implemented for a{" "}
        <em>client crediential grant</em>:
      </p>
      <Syntax
        language="typescript"
        code={`// model.ts — in-memory store for an OAuth 2.0 client-credentials demo

import { confidentialClients } from './db.js';

export interface ConfidentialClient {
  clientId: string;
  clientSecret: string;
}

export interface Token {
  accessToken: string;
  accessTokenExpiresAt: Date;
  client: ConfidentialClient;
}

export const getClient = (
  clientId: string,
  clientSecret: string,
): ConfidentialClient | undefined =>
  confidentialClients.find(
    (client) =>
      client.clientId === clientId && client.clientSecret === clientSecret,
);

export const getUserFromClient = (
  client: ConfidentialClient,
): { id: string } | undefined => {
  // For the client-credentials grant, the client *is* the resource owner.
  // We synthesize a pseudo-user derived from the client itself.
  const user = {
    id: client.clientId,
  };
  return user;
};

export const saveToken = (
  token: Token,
  client: ConfidentialClient,
): Token => {
  tokens.push({ ...token, client });
  return { ...token, client };
};

const getAccessToken = (accessToken) => {
  let tokens = db.tokens.filter((savedToken) => {
    return savedToken.accessToken === accessToken;
  })
  return tokens[0];
}
`}
        lineNumbers={true}
      />
    </div>
  );
}
