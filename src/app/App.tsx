import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "../components/home/Home";
import NavBar from "../shared/ui/NavBar";
import store from "./store";
import Error404 from "../components/404/Error";

function App() {
  const appStore = store.getState();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/falstaff"
        element={
          <>
            <NavBar links={appStore.navLinksSliceReducer.navLinks} />
            <Outlet />
          </>
        }
        errorElement={
          <>
            <NavBar links={appStore.navLinksSliceReducer.navLinks} />
            <Error404 />
          </>
        }
      >
        <Route index element={<Home />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
