import { useDispatch, useSelector } from "react-redux";
import {
  clearChapterLinks,
  selectActiveChapter,
  setActiveChapter,
  setChapterLinks,
  setLinks,
} from "../../navBar/navBarSlice";
import { useEffect } from "react";

export default function Sorting() {
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
          name: "Sort",
          active: true,
        },
      ]),
    );
    dispatch(setActiveChapter("Sort"));

    // Clear chapter on unmount
    return () => {
      dispatch(clearChapterLinks());
      dispatch(setActiveChapter(""));
    };
  }, [dispatch]);

  return (
    <div>
      <h1>Sort</h1>
      <p>Sorting algorithms</p>
      {activeChapter === "Sort" && <SortingComplexity />}

      <br style={{ marginTop: "2rem" }} />
    </div>
  );
}

function SortingComplexity() {
  return (
    <div>
      <p>Different sorting algorithms have different time complexities:</p>
      <table style={{ margin: "1rem" }}>
        <thead style={{ textDecoration: "underline" }}>
          <tr>
            <th>Algorithm</th>
            <th>Worst</th>
            <th>Avg</th>
            <th>Best</th>
            <th>Memory</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ paddingRight: "1rem" }}>
              <strong>Bubble Sort</strong>
            </td>
            <td>
              O(n<sup>2</sup>)
            </td>
            <td>
              O(n<sup>2</sup>)
            </td>
            <td>O(n)</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td style={{ paddingRight: "1rem" }}>
              <strong>Insertion Sort</strong>
            </td>
            <td>
              O(n<sup>2</sup>)
            </td>
            <td>
              O(n<sup>2</sup>)
            </td>
            <td>O(n)</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td style={{ paddingRight: "1rem" }}>
              <strong>Selection Sort</strong>
            </td>
            <td>
              O(n<sup>2</sup>)
            </td>
            <td>
              O(n<sup>2</sup>)
            </td>
            <td>
              O(n<sup>2</sup>)
            </td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td style={{ paddingRight: "1rem" }}>
              <strong>Quick Sort</strong>
            </td>
            <td>
              O(n<sup>2</sup>)
            </td>
            <td>O(n log n)</td>
            <td>O(n log n)</td>
            <td>O(log n)</td>
          </tr>
          <tr>
            <td style={{ paddingRight: "1rem" }}>
              <strong>Merge Sort</strong>
            </td>
            <td>O(n log n)</td>
            <td>O(n log n)</td>
            <td>O(n log n)</td>
            <td>O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
