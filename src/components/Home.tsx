import { useDispatch } from "react-redux";
import { setLinks } from "../features/navLinks/navLinksSlice";
import { useEffect } from "react";

function Home() {
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
      <div>
        <h3>Front End</h3>
        <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
          Front end technologies and libraries.
        </p>
        <div className="group">
          <span>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML
            </a>
          </span>
          <span>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSS
            </a>
          </span>
          <span>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript
            </a>
          </span>
        </div>
      </div>
      <div>
        <h3>Back End</h3>
        <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
          Back end technologies and libraries.
        </p>
        <div className="group">
          <span>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API"
              target="_blank"
              rel="noopener noreferrer"
            >
              API
            </a>
          </span>
          <span>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Database"
              target="_blank"
              rel="noopener noreferrer"
            >
              Database
            </a>
          </span>
          <span>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Server"
              target="_blank"
              rel="noopener noreferrer"
            >
              Server
            </a>
          </span>
        </div>
      </div>
      <div>
        <h3>Development</h3>
        <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
          Development methods.
        </p>
        <div className="group">
          <span>Testing</span>
          <span>CI/CD</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
