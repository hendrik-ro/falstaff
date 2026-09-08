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
import Home from "../components/Home";
import About from "../components/About";
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
      <Route path="/" element={<Layout links={links} />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
