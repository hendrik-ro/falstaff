import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "../features/home/Home";
import About from "../features/about/About";
import Error404 from "../components/ErrorElement";
import NavBar from "../features/navBar/NavBar";
import Footer from "../features/Footer";
import React from "../features/frontend/react/React";
import DocumentObjectModel from "../features/frontend/dom/DOM";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/falstaff" element={<Layout />}>
        <Route index element={<Home />} />
        // Front End
        <Route path="/falstaff/frontend/react" element={<React />} />
        <Route
          path="/falstaff/frontend/dom"
          element={<DocumentObjectModel />}
        />
        // Back End // Development // About
        <Route path="/falstaff/about" element={<About />} />
        // ErrorElement
        <Route path="/falstaff/*" element={<Error404 />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
