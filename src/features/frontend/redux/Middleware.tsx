import Syntax from "../../../components/SyntaxHighlighter";

export default function ReduxMiddleware() {
  return (
    <div>
      <h2>Middleware</h2>
      <ReduxMiddlewareThunks />
      <ReduxMiddlewareExtraReducers />
      <br style={{ marginTop: "2rem" }} />
    </div>
  );
}

function ReduxMiddlewareThunks() {
  return (
    <div>
      <h3>Thunks</h3>
      <p>
        In programming, <em>thunks</em> are functions that allow you to dispatch
        actions asynchronously.
      </p>
      <p>
        Redux provides a <code>createAsyncThunk</code> utility for creating
        thunks.
      </p>
      <p>
        First, you will need to define the type of the thunk using{" "}
        <code>createAsyncThunk</code>'s generic type parameter:
      </p>
      <Syntax
        language="typescript"
        code={`import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

// omit actual store setup

// Infer the type of 'store'
export type AppStore = typeof store
// Infer the 'AppDispatch' type from the store itself
export type AppDispatch = typeof store.dispatch
// Same for the 'RootState' type
export type RootState = ReturnType<typeof store.getState>
// Export a reusable type for handwritten thunks
export type AppThunk = ThunkAction<void, RootState, unknown, Action>`}
        lineNumbers={true}
      />
      <p>
        Then, you can use <code>createAsyncThunk</code> to define the thunk
        itself:
      </p>
      <Syntax
        language="typescript"
        code={`import { createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState, AppDispatch } from './store'
import { fetchUser } from './api'

export const fetchUserById = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
}>(
  'users/fetchUserById',
  async (arg, thunkAPI) => {
    const response = await fetchUser(arg);
    return response.json();
  }
)`}
        lineNumbers={true}
      />
    </div>
  );
}

function ReduxMiddlewareExtraReducers() {
  return (
    <div>
      <h3>Extra Reducers</h3>
      <p>
        To add thunks to your store, use the <code>extraReducers</code> field in
        your slice reducer:
      </p>
      <Syntax
        language="typescript"
        code={`export const loadRecipes = createAsyncThunk.withTypes<{
        state: RootState
        dispatch: AppDispatch
      }>(
        "allRecipes/getAllRecipes",
        async () => {
          const response = await fetch("api/recipes?limit=10");

          if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
          }

          const json = await response.json();
          return json as Recipe[]; // Assuming Recipe type exists
        }
      );

      const sliceOptions = {
        name: "allRecipes",
        initialState: {
          recipes: [] as Recipe[],
          isLoading: false,
          hasError: false,
        },
        reducers: {},
        extraReducers: builder => {
          builder
            .addCase(loadRecipes.pending, (state) => {
              state.isLoading = true;
              state.hasError = false;
            })
            .addCase(loadRecipes.fulfilled, (state, action) => {
              state.isLoading = false;
              state.hasError = false;
              state.recipes = action.payload;
            })
            .addCase(loadRecipes.rejected, (state) => {
              state.isLoading = false;
              state.hasError = true;
            })
        }
      };

      export const allRecipesSlice = createSlice(sliceOptions);
      export const { } = allRecipesSlice.actions; // Empty since no synchronous reducers
      export const selectAllRecipes = (state: RootState) => state.allRecipes.recipes;
      export const selectAllRecipesStatus = (state: RootState) => state.allRecipes.isLoading;
      export const selectAllRecipesError = (state: RootState) => state.allRecipes.hasError;`}
        lineNumbers={true}
      />
    </div>
  );
}
