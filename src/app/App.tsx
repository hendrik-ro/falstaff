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
import type { NavBarProps } from "../types/NavBar";
import About from "../components/About";

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
