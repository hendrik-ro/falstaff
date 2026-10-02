export default function Sorting() {
  return (
    <div>
      <h2>Overview complexity</h2>
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
