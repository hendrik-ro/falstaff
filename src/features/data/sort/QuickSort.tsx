import Syntax from "../../../components/SyntaxHighlighter";

export default function QuickSort() {
  return (
    <div>
      <h2>Quick Sort</h2>
      <p>
        Quick Sort is a divide-and-conquer algorithm that works by selecting a
        'pivot' element from the array and partitioning the other elements into
        two sub-arrays, according to whether they are less than or greater than
        the pivot.
      </p>
      <Syntax
        language="typescript"
        code={`class Quicksort
      {
         public sort(arr: number[])
         {
             this.quicksort(arr, 0, arr.length - 1);
         }

         private quicksort(arr: number[], low: number, high: number)
         {
             if(low < high)
             {
                 const p = this.partition(arr, low, high);

                 this.quicksort(arr, low, p - 1);
                 this.quicksort(arr, p + 1, high);
             }
         }

         private partition(arr: number[], low: number, high: number) : number
         {
             const pivot = arr[high];
             let i = low;
             for(let j = low; j < high; j++)
             {
                 if(arr[j] < pivot)
                 {
                     this.swap(arr, i, j);
                     i++;
                 }
             }
             this.swap(arr, i, high);
             return i;
         }

         private swap(arr: number[], a: number, b: number)
         {
             const tmp = arr[a];
             arr[a] = arr[b];
             arr[b] = tmp;
         }
      }
`}
        lineNumbers={true}
      />
    </div>
  );
}
