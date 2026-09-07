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
import Error404 from "../components/404/Error";
import { selectNavLinks } from "../features/navLinks/navLinksSlice";
import { useSelector } from "react-redux";

function App() {
  const links = useSelector(selectNavLinks);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/falstaff"
        element={
          <>
            <NavBar links={links} />
            <Outlet />
          </>
        }
        errorElement={
          <>
            <NavBar links={links} />
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
