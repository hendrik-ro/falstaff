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
import Redux from "../features/frontend/redux/Redux";
import NodeJS from "../features/backend/node/Node";
import ExpressJS from "../features/backend/express/Express";
import Sorting from "../features/data/sort/Sorting";
import Testing from "../features/dev/testing/Testing";

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
        <Route path="/falstaff/frontend/dom" element={<DocumentObjectModel />} />
        <Route path="/falstaff/frontend/redux" element={<Redux />} />
        // Back End
        <Route path="/falstaff/backend/nodejs" element={<NodeJS />} />
        <Route path="/falstaff/backend/expressjs" element={<ExpressJS />} />
        // Development
        <Route path="/falstaff/dev/testing" element={<Testing />} />
        // Data Structures and Algorithms
        <Route path="/falstaff/data/sort" element={<Sorting />} />
        // About
        <Route path="/falstaff/about" element={<About />} />
        // ErrorElement
        <Route path="/falstaff/*" element={<Error404 />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
