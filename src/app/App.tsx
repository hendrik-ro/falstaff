import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "../components/Home";
import NavBar from "../features/navLinks/NavBar";
import Error404 from "../components/errorElement";
import { selectNavLinks } from "../features/navLinks/navLinksSlice";
import { useSelector } from "react-redux";
import Footer from "../features/Footer";

function App() {
  const links = useSelector(selectNavLinks);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/falstaff"
        element={
          <div>
            <NavBar links={links} />
            <Outlet />
            <Footer />
          </div>
        }
        errorElement={
          <div>
            <NavBar links={links} />
            <Error404 />
            <Footer />
          </div>
        }
      >
        <Route index element={<Home />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
