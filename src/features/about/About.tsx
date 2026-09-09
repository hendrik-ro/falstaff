import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLinks } from "../navBar/navBarSlice";

export default function About() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setLinks([
        {
          name: "Home",
          to: "/falstaff",
        },
        {
          name: "About",
          to: "/falstaff/about",
        },
      ]),
    );
  }, [dispatch]);

  return (
    <div>
      <h1>About</h1>
      <section>
        <h2>Falstaff</h2>
        <p>
          Falstaff serves as a cheat sheet for Software Engineering. It
          consolidates scattered and often convoluted documentation into a more
          accessible resource. The project does not aim to be a comprehensive
          coding guide but provides relevant information and boilerplate code to
          refresh your memory, particularly for stacks you only touch
          periodically.
        </p>
        <p>The page is a living document and is continuously updated.</p>
      </section>
      <section>
        <h2>Contributing</h2>
        <p>
          Contributions are welcome on{" "}
          <a
            className="tooltip"
            href="https://github.com/hendrik-ro/falstaff"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span className="tooltiptext">Falstaff on GitHub</span>
          </a>
          .
        </p>
      </section>
      <section>
        <h2>License</h2>
        <p>This project is licensed under the AGPL License.</p>
      </section>
    </div>
  );
}
