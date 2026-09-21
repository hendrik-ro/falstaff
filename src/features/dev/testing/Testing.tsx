import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearChapterLinks,
  selectActiveChapter,
  setActiveChapter,
  setChapterLinks,
  setLinks,
} from "../../navBar/navBarSlice";
import { useEffect } from "react";

export default function Testing() {
  const dispatch = useDispatch();
  const activeChapter = useSelector(selectActiveChapter);
  useEffect(() => {
    dispatch(
      setLinks([
        {
          name: "Home",
          to: "/falstaff",
        },
      ]),
    );
    dispatch(
      setChapterLinks([
        {
          name: "Testing",
          active: true,
        },
      ]),
    );
    dispatch(setActiveChapter("Testing"));

    // Clear chapter on unmount
    return () => {
      dispatch(clearChapterLinks());
      dispatch(setActiveChapter(""));
    };
  }, [dispatch]);

  return (
    <div>
      <h1>Testing</h1>
      <p>Automated testing.</p>
      {activeChapter === "Testing" && <TestingLibraries />}
    </div>
  );
}

function TestingLibraries() {
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
      description:
        "library including fakes, spies and mocks to be used with any testing framework",
    },
  ];
  return (
    <div className="flexItem">
      <h3>JavaScript</h3>
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
