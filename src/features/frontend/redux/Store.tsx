import Syntax from "../../../components/SyntaxHighlighter";

export default function ReduxStore() {
  return (
    <div>
      <h2>Redux Store</h2>
      <Syntax
        language="typescript"
        code={`import { configureStore } from '@reduxjs/toolkit'
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import exampleReducer from './features/bookmarks/bookmarksSlice'

const store = configureStore({
  reducer: {
    example: exampleReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
`}
      />
    </div>
  );
}
