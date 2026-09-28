import { useDispatch, useSelector } from "react-redux";
import {
  clearChapterLinks,
  selectActiveChapter,
  setActiveChapter,
  setChapterLinks,
} from "../../navBar/navBarSlice";
import { useEffect } from "react";

export default function Cookies() {
  const dispatch = useDispatch();
  const activeChapter = useSelector(selectActiveChapter);

  useEffect(() => {
    dispatch(
      setChapterLinks([
        {
          name: "Cookies",
          active: true,
        },
      ]),
    );
    dispatch(setActiveChapter("Cookies"));

    // Clear chapters on unmount
    return () => {
      dispatch(clearChapterLinks());
      dispatch(setActiveChapter(""));
    };
  }, [dispatch]);

  return (
    <div>
      <h2>Cookies</h2>

      {activeChapter === "Cookies" && <CookiesComparison />}
    </div>
  );
}

function CookiesComparison() {
  return (
    <table>
      <caption>Browser storage comparison</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Cookies</th>
          <th scope="col">localStorage</th>
          <th scope="col">sessionStorage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Server access?</th>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
        </tr>
        <tr>
          <th scope="row">Storage</th>
          <td>4 KB</td>
          <td>10 MB</td>
          <td>5 MB</td>
        </tr>
        <tr>
          <th scope="row">Expiration</th>
          <td>Custom</td>
          <td>Manual deletion</td>
          <td>Closed tab</td>
        </tr>
        <tr>
          <th scope="row">Browser</th>
          <td>HTML4, HTML5</td>
          <td>HTML5</td>
          <td>HTML5</td>
        </tr>
        <tr>
          <th scope="row">Access</th>
          <td>Any window</td>
          <td>Any window</td>
          <td>Same tab</td>
        </tr>
      </tbody>
    </table>
  );
}
