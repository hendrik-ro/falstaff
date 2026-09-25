import {
  createHashRouter,
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
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        // Front End
        <Route path="frontend/react" element={<React />} />
        <Route path="frontend/dom" element={<DocumentObjectModel />} />
        <Route path="frontend/redux" element={<Redux />} />
        // Back End
        <Route path="backend/nodejs" element={<NodeJS />} />
        <Route path="backend/expressjs" element={<ExpressJS />} />
        // Development
        <Route path="dev/testing" element={<Testing />} />
        // Data Structures and Algorithms
        <Route path="data/sort" element={<Sorting />} />
        // About
        <Route path="about" element={<About />} />
        // ErrorElement
        <Route path="*" element={<Error404 />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
