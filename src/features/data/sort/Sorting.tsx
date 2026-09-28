import { useDispatch, useSelector } from "react-redux";
import {
  clearChapterLinks,
  selectActiveChapter,
  setActiveChapter,
  setChapterLinks,
} from "../../navBar/navBarSlice";
import { useEffect } from "react";
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort";
import QuickSort from "./QuickSort";
import MergeSort from "./MergeSort";

export default function Sorting() {
  const dispatch = useDispatch();
  const activeChapter = useSelector(selectActiveChapter);
  useEffect(() => {
    dispatch(
      setChapterLinks([
        {
          name: "Sort",
          active: true,
        },
        {
          name: "Bubble Sort",
          active: false,
        },
        {
          name: "Insertion Sort",
          active: false,
        },
        {
          name: "Selection Sort",
          active: false,
        },
        {
          name: "Quick Sort",
          active: false,
        },
        {
          name: "Merge Sort",
          active: false,
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
      <p>Algorithms for sorting.</p>
      {activeChapter === "Sort" && <SortingComplexity />}
      {activeChapter === "Bubble Sort" && <BubbleSort />}
      {activeChapter === "Insertion Sort" && <InsertionSort />}
      {activeChapter === "Merge Sort" && <MergeSort />}
      {activeChapter === "Selection Sort" && <SelectionSort />}
      {activeChapter === "Quick Sort" && <QuickSort />}

      <br style={{ marginTop: "2rem" }} />
    </div>
  );
}

function SortingComplexity() {
  return (
    <div>
      <table>
        <caption>Different sorting algorithms have different time complexities</caption>
        <thead>
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
            <td>
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
            <td>
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
            <td>
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
            <td>
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
            <td>
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
