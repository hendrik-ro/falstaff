import Syntax from "../../../components/SyntaxHighlighter";

export default function ReduxStore() {
  return (
    <div>
      <h2>Redux Store</h2>
      <p>
        Create the Redux store file <code>store.ts</code> using{" "}
        <code>configureStore</code>.
      </p>
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
        lineNumbers={true}
      />
      <p>
        Wrap the <code>App</code> component with <code>Provider</code> to make
        the store available to all components:
      </p>
      <Syntax
        language="typescript"
        code={`import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./app/App.tsx";
import store from "./app/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
);

export function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}`}
        lineNumbers={true}
      />
    </div>
  );
}
