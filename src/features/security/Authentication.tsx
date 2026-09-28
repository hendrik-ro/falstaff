import { useDispatch, useSelector } from "react-redux";
import {
  clearChapterLinks,
  selectActiveChapter,
  setActiveChapter,
  setChapterLinks,
} from "../navBar/navBarSlice";
import { useEffect } from "react";

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
    </div>
  );
}

function AuthenticationIntroduction() {
  return (
    <div>
      <h2>Cookie-bases sessions</h2>
      <p>
        Whilst a server holds a session state, the client keeps a session ID in a cookie. On each
        request, the cookie is automatically attached as an HTTP header.
      </p>
      <br style={{ marginTop: "1rem" }} />
      <table>
        <caption>Cookie Attributes</caption>
        <tbody>
          <tr>
            <td scope="row">
              <code>HttpOnly</code>
            </td>
            <td>Blocks JavaScript access and prevents XSS cookie theft</td>
          </tr>
          <tr>
            <td scope="row">
              <code>Secure</code>
            </td>
            <td>Only sent over HTTPS</td>
          </tr>
          <tr>
            <td scope="row">
              <code>SameSite= Lax | Strict</code>
            </td>
            <td>Blocks CSRF by limiting cross-site sending</td>
          </tr>
          <tr>
            <td scope="row">
              <code>Max-Age / Expires</code>
            </td>
            <td>Controlls session lifetime</td>
          </tr>
          <tr>
            <td scope="row">
              <code>Path=/; Domain</code>
            </td>
            <td>Scope where the cookie is sent</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
