import Syntax from "../../../components/SyntaxHighlighter";

export default function Supertest() {
  return (
    <div>
      <h2>Supertest</h2>
      <p>
        <a href="https://github.com/ladjs/supertest" target="_blank" rel="noopener noreferrer">
          supertest
        </a>{" "}
        is a library for testing HTTP servers without starting them or opening a real network port.
        It wraps the Superagent request library and passes each request straight to the app's
        request handler, so an Express (or Connect-style) app can be exercised end to end — routing,
        middleware and all — from within a test runner like Vitest or Jest.
      </p>
      <p>
        Pass the app instance to <code>request()</code> and chain an assertion method on the
        request:
      </p>
      <Syntax
        language="typescript"
        code={`import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "./app";

const app = createApp();

describe("GET /api/users", () => {
  it("responds with JSON and a 200 status", async () => {
    const response = await request(app).get("/api/users").expect(200);

    expect(response.body).toEqual([{ id: 1, name: "Ada" }]);
  });

  it("rejects an unknown route with a 404", async () => {
    await request(app).get("/api/nope").expect(404);
  });
});`}
        lineNumbers={true}
      />
      <p>
        Because the server is never bound to a port, each test runs against the real middleware
        stack in-process. Requests with a body and custom headers work the same way:
      </p>
      <Syntax
        language="typescript"
        code={`it("creates a new user", async () => {
  const response = await request(app)
    .post("/api/users")
    .set("Content-Type", "application/json")
    .send({ name: "Grace" })
    .expect("Content-Type", /json/)
    .expect(201);

  expect(response.body.name).toBe("Grace");
});`}
        lineNumbers={true}
      />
      <p>
        The <code>expect(...)</code> calls are supertest's own assertions on the response; combine
        them with the test runner's matchers for deeper checks on <code>response.body</code>,{" "}
        <code>response.headers</code> or <code>response.status</code>. Note that supertest works
        with any handler in the Node <code>(req, res)</code> style, but it cannot test apps that
        require a real browser environment — that is jsdom's job.
      </p>
    </div>
  );
}
