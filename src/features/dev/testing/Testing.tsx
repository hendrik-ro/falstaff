import { Link } from "react-router-dom";

export default function Testing() {
  return (
    <div>
      <h2>Testing Libraries</h2>
      <div className="flexContainer">
        <TestingJS />
        <TestingGo />
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
  ];
  return (
    <div className="flexItem">
      <h3>JavaScript / TypeScript</h3>
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
