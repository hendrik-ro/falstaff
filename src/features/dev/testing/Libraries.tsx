import { useState, type SyntheticEvent } from "react";
import { Link } from "react-router-dom";

export default function TestLibraries() {
  const [language, setLanguage] = useState("js");

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const selected = new FormData(event.currentTarget).get("language");
    if (selected === "js" || selected === "go") {
      setLanguage(selected);
    }
  };

  return (
    <div>
      <h2>Testing Libraries</h2>
      <form id="language-form" onSubmit={handleSubmit}>
        <select id="language" name="language" required>
          <option value="js">JavaScript/TypeScript</option>
          <option value="go">Golang</option>
        </select>

        <button style={{ fontSize: "0.7rem" }} type="submit">
          show
        </button>
      </form>
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
