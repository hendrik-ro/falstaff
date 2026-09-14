import Syntax from "../../../components/SyntaxHighlighter";

export default function ReduxSlice() {
  return (
    <div>
      <h2>Redux Slice</h2>
      <Syntax
        language="typescript"
        code={`import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ExampleState {
  statePropertyOne: string[];
  statePropertyTwo: string;
}

const initialState: ExampleState = {
  statePropertyOne: [],
  statePropertyTwo: "",
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    addExample: (state, action: PayloadAction<string>) => {
      state.statePropertyOne.push(action.payload);
    },
    removeExample: (state, action: PayloadAction<string>) => {
      state.statePropertyOne = state.statePropertyOne.filter((example) => example !== action.payload);
    },
    updateStatePropertyTwo: (state, action: PayloadAction<string>) => {
      state.statePropertyTwo = action.payload;
    },
    clearAll: (state) => {
      state.statePropertyOne = [];
      state.statePropertyTwo = "";
    },
  },
});

export const selectStatePropertyOne = (state: { example: ExampleState }) => state.example.statePropertyOne;
export const selectStatePropertyTwo = (state: { example: ExampleState }) => state.example.statePropertyTwo;
export const { addExample, removeExample, updateStatePropertyTwo, clearAll } = exampleSlice.actions;
export const exampleReducer = exampleSlice.reducer;
export default exampleReducer;`}
        lineNumbers={true}
      />
    </div>
  );
}
