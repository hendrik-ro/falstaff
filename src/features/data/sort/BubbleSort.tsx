import Syntax from "../../../components/SyntaxHighlighter";

export default function BubbleSort() {
  return (
    <div>
      <h2>Bubble Sort</h2>
      <p>
        Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares
        adjacent elements and swaps them if they are in the wrong order.
      </p>
      <Syntax
        language="typescript"
        code={`function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
      `}
        lineNumbers={true}
      />
    </div>
  );
}
