import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLinks } from "../features/navBar/navBarSlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setLinks([
        {
          name: "Home",
          to: "/",
        },
        {
          name: "About",
          to: "/about",
        },
      ]),
    );
  }, [dispatch]);

  return (
    <div>
      <HomeHeaders />
      <HomeContent />
      <br style={{ marginBottom: "2rem" }} />
    </div>
  );
}

function HomeHeaders() {
  return (
    <header>
      <h1>Falstaff</h1>
      <h2>Full Stack Cheat Sheet</h2>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        This cheat sheet is work in progress and is continuously updated.
      </p>
    </header>
  );
}

function HomeContent() {
  return (
    <div className="groupedColumns">
      <HomeContentFrontEnd />
      <HomeContentBackEnd />
      <HomeContentDevelopment />
    </div>
  );
}

function HomeContentFrontEnd() {
  return (
    <div>
      <h3>Front End</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        Front end technologies and libraries.
      </p>
      <div className="group">
        <span className="tooltip">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML
          </a>
          <span className="tooltiptext">HTML</span>
        </span>
        <span className="tooltip">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS
          </a>
          <span className="tooltiptext">CSS</span>
        </span>
        <span className="tooltip">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            JavaScript
          </a>
          <span className="tooltiptext">JavaScript</span>
        </span>
      </div>
    </div>
  );
}

function HomeContentBackEnd() {
  return (
    <div>
      <h3>Back End</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        Back end technologies and libraries.
      </p>
      <div className="group">
        <span className="tooltip">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API"
            target="_blank"
            rel="noopener noreferrer"
          >
            API
          </a>
          <span className="tooltiptext">API</span>
        </span>
        <span className="tooltip">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Database"
            target="_blank"
            rel="noopener noreferrer"
          >
            Database
          </a>
          <span className="tooltiptext">Database</span>
        </span>
        <span className="tooltip">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Server"
            target="_blank"
            rel="noopener noreferrer"
          >
            Server
          </a>
          <span className="tooltiptext">Server</span>
        </span>
      </div>
    </div>
  );
}

function HomeContentDevelopment() {
  return (
    <div>
      <h3>Development</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        Development methods.
      </p>
      <div className="group">
        <span className="tooltip">
          Testing
          <span className="tooltiptext">Testing</span>
        </span>
        <span className="tooltip">
          CI/CD
          <span className="tooltiptext">CI/CD</span>
        </span>
      </div>
    </div>
  );
}
