import Syntax from "../../../components/SyntaxHighlighter";

export default function ReduxSlice() {
  return (
    <div>
      <h2>Redux Slice</h2>
      <Syntax
        language="typescript"
        code={`import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  statePropertyOne: [],
  statePropertyTwo: "",
};

const exampleSlice = createSlice({
  name: 'example',
  initialState: initialState,
  reducers: {
    addExample: (state, action) => {
      return { ...state, statePropertyOne: [...state.statePropertyOne, action.payload] };
    },
    removeExample: (state, action) => {
      return { ...state, statePropertyOne: state.statePropertyOne.filter((example) => example !== action.payload) };
    },
    updateStatePropertyTwo: (state, action) => {
      return { ...state, statePropertyTwo: action.payload };
    },
  }
});

export const selectStatePropertyOne = (state: any) => state.statePropertyOne;
export const selectStatePropertyTwo = (state: any) => state.statePropertyTwo;
export const { addExample, removeExample, updateStatePropertyTwo } = exampleSlice.actions;
export const exampleReducer = exampleSlice.reducer;
export default exampleReducer`}
      />
    </div>
  );
}
