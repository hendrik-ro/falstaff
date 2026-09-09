import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import type { NavBarProps } from "../types/NavBar";
import Home from "../features/home/Home";
import About from "../features/about/About";
import Error404 from "../components/ErrorElement";
import NavBar from "../features/navBar/NavBar";
import { selectNavLinks } from "../features/navBar/navBarSlice";
import Footer from "../features/Footer";

const Layout = (props: NavBarProps) => {
  const { links } = props;
  return (
    <>
      <NavBar links={links} />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const links = useSelector(selectNavLinks);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/falstaff" element={<Layout links={links} />}>
        <Route index element={<Home />} />
        <Route path="/falstaff/about" element={<About />} />
        <Route path="/falstaff/*" element={<Error404 />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
