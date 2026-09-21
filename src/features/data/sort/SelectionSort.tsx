import Syntax from "../../../components/SyntaxHighlighter";

export default function SelectionSort() {
  return (
    <div>
      <h2>Selection Sort</h2>
      <p>Selection sort is a simple comparison-based sorting algorithm.</p>
      <Syntax
        language="typescript"
        code={`function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
`}
        lineNumbers={true}
      />
    </div>
  );
}
