import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";

export default function TestLibraries() {
  const [language, setLanguage] = useState("js");

  return (
    <div>
      <h2>Testing Libraries & Frameworks</h2>
      <select
        id="language"
        value={language}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setLanguage(e.target.value)}
        style={{ fontSize: "0.7rem" }}
        required
      >
        <option value="js">JavaScript/TypeScript</option>
        <option value="go">Golang</option>
      </select>
      <div className="flexContainer">
        {language === "js" && <TestingJS />}
        {language === "go" && <TestingGo />}
      </div>
    </div>
  );
}

function TestingJS() {
  const Libraries = [
    {
      name: "Chai",
      link: "https://www.chaijs.com/",
      description: "assertion library for JavaScript",
    },
    {
      name: "Supertest",
      link: "https://github.com/ladjs/supertest",
      description: "API testing library",
    },
    {
      name: "jsdom",
      link: "https://github.com/jsdom/jsdom",
      description: "DOM testing library",
    },
    {
      name: "Enzyme",
      link: "https://enzymejs.github.io/enzyme/",
      description: "testing framework for React",
    },
    {
      name: "Jest",
      link: "https://www.jestjs.io/",
      description: "testing framework for JavaScript",
    },
    {
      name: "Mocha",
      link: "https://mochajs.org/",
      description: "testing framework for JavaScript",
    },
    {
      name: "Sinon",
      link: "https://sinonjs.org/",
      description: "library including fakes, spies and mocks to be used with any testing framework",
    },
    {
      name: "Vitest",
      link: "https://vitest.dev/",
      description: "Vite-native testing framework",
    },
  ];
  return (
    <div className="flexItem">
      <h3>JavaScript / TypeScript</h3>
      <p>Modern React project: Jest (or Vitest) + React Testing Library</p>
      <p>Node.js API/service: Mocha + Chai + Sinon</p>
      <ul style={{ fontSize: "1rem" }}>
        {Libraries.map((lib) => (
          <li key={lib.name}>
            <Link target="_blank" rel="noopener noreferrer" to={lib.link}>
              {lib.name}
            </Link>{" "}
            - {lib.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TestingGo() {
  const Libraries = [
    {
      name: "Testify",
      link: "https://github.com/stretchr/testify",
      description: "testing library for Go",
    },
    {
      name: "Golangci-lint",
      link: "https://golangci-lint.run/",
      description: "linter for go",
    },
    {
      name: "Testing",
      link: "https://pkg.go.dev/testing",
      description: "built-in testing package",
    },
  ];
  return (
    <div className="flexItem">
      <h3>Go</h3>
      <ul style={{ fontSize: "1rem" }}>
        {Libraries.map((lib) => (
          <li key={lib.name}>
            <Link target="_blank" rel="noopener noreferrer" to={lib.link}>
              {lib.name}
            </Link>{" "}
            - {lib.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
