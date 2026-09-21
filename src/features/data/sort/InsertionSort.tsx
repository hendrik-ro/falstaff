import Syntax from "../../../components/SyntaxHighlighter";

export default function InsertionSort() {
  return (
    <div>
      <h2>Insertion Sort</h2>
      <p>
        Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at
        a time.
      </p>
      <Syntax
        language="typescript"
        code={`function insertionSort(arr: number[]): number[] {
  // Iterate the array (0..n)
  for(let i = 0; i < arr.length; i++)
  {
    const tmp = arr[i];
    let j = i - 1;
    // Iterate while J is out of place.
    while(j >= 0 && arr[j] > tmp)
    {
        arr[j + 1] = arr[j];
        j--;
    }
    // Assign the correct location of i where j stops.
    arr[j + 1] = tmp;
  }
  return arr;
}
      `}
        lineNumbers={true}
      />
    </div>
  );
}
