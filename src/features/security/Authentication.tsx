import { useDispatch, useSelector } from "react-redux";
import {
  clearChapterLinks,
  selectActiveChapter,
  setActiveChapter,
  setChapterLinks,
} from "../navBar/navBarSlice";
import { useEffect } from "react";
import AuthenticationSessions from "./Sessions";
import AuthenticationExpressJS from "./ExpressSession";

export default function Authentication() {
  const dispatch = useDispatch();
  const activeChapter = useSelector(selectActiveChapter);

  useEffect(() => {
    dispatch(
      setChapterLinks([
        {
          name: "Authentication",
          active: true,
        },
        {
          name: "Sessions",
          active: false,
        },
        {
          name: "Express-session",
          active: false,
        },
      ]),
    );
    dispatch(setActiveChapter("Authentication"));

    // Clear chapter on unmount
    return () => {
      dispatch(clearChapterLinks());
      dispatch(setActiveChapter(""));
    };
  }, [dispatch]);

  return (
    <div>
      <h1>Authentication</h1>
      <p>
        Verify a users <em>identity</em>.
      </p>
      {activeChapter === "Authentication" && <AuthenticationIntroduction />}
      {activeChapter === "Sessions" && <AuthenticationSessions />}
      {activeChapter === "Express-session" && <AuthenticationExpressJS />}
    </div>
  );
}

function AuthenticationIntroduction() {
  return (
    <div>
      <h2>Types of authentication</h2>
      <p>To identify a user, a combination of three authentication stypes is used.</p>
      <br style={{ marginTop: "1rem" }} />
      <table>
        <caption>Different authentication types</caption>
        <thead>
          <tr>
            <th>Type</th>
            <th>Desciption</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Knowledge</th>
            <td>Something the user knows</td>
            <td>Password, PIN</td>
          </tr>
          <tr>
            <th scope="row">Ownership</th>
            <td>Something the user has</td>
            <td>ID card, security token</td>
          </tr>
          <tr>
            <th scope="row">Inherence</th>
            <td>Something the user is or does</td>
            <td>Fingerprint, face scan, retina scan</td>
          </tr>
        </tbody>
      </table>
      <br style={{ marginTop: "1rem" }} />
      <p>
        Furthermore, a <em>single-factor authentication</em> provides lower certainty than{" "}
        <em>multi-factor authentication</em>.
      </p>
    </div>
  );
}
