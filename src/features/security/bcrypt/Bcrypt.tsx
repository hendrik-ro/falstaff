import { useDispatch, useSelector } from "react-redux";
import {
  clearChapterLinks,
  selectActiveChapter,
  setActiveChapter,
  setChapterLinks,
} from "../../navBar/navBarSlice";
import { useEffect } from "react";
import Syntax from "../../../components/SyntaxHighlighter";
import BcryptHashing from "./Hashing";

export default function Bcrypt() {
  const dispatch = useDispatch();
  const activeChapter = useSelector(selectActiveChapter);

  useEffect(() => {
    dispatch(
      setChapterLinks([
        {
          name: "Bcrypt",
          active: true,
        },
        {
          name: "Hashing",
          active: false,
        },
      ]),
    );
    dispatch(setActiveChapter("Bcrypt"));

    return () => {
      dispatch(setActiveChapter(""));
      dispatch(clearChapterLinks());
    };
  }, [dispatch]);

  return (
    <div>
      <h1>Bcrypt</h1>
      <p>JavaScript encryption library.</p>
      {activeChapter === "Bcrypt" && <BcryptIntro />}
      {activeChapter === "Hashing" && <BcryptHashing />}
    </div>
  );
}

function BcryptIntro() {
  return (
    <div>
      <h2>Introduction</h2>
      <p>
        <strong>Important!</strong> <code>bcrypt</code> is lacking on several fronts -{" "}
        <code>argon2</code> or <code>crypto.scrypt</code> are better choices by today's standard.
      </p>
      <br style={{ marginTop: "1rem" }} />
      <p>
        Using bcrypt, we can protect our users by hashing and salting passwords. Multiple rounds of
        hashing ensures that an attacker must deploy massive resources and hardware to be able to
        crack data.
      </p>
      <br style={{ marginTop: "1rem" }} />
      <p>First install the package:</p>
      <Syntax
        language="bash"
        code={`$ pnpm install bcrypt
$ pnpm install -D @types/bcrypt`}
      />
      <p>Then import it:</p>
      <Syntax language="typescript" code={`import bcrypt from "bcrypt";`} />
    </div>
  );
}
