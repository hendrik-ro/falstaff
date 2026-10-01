import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import "./App.css";
import Home from "../features/home/Home";
import About from "../features/about/About";
import Error404 from "../components/ErrorElement";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TopicPage from "../components/TopicPage";
import lazyPage from "../components/LazyPage";
import { topics } from "./content";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const topicRoutes: RouteObject[] = topics.map((topic) => ({
  path: topic.path,
  element: <TopicPage topic={topic} />,
  children: [
    { index: true, element: lazyPage(topic.chapters[0].loader) },
    ...topic.chapters
      .slice(1)
      .map((chapter) => ({ path: chapter.path, element: lazyPage(chapter.loader) })),
  ],
}));

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        ...topicRoutes,
        { path: "about", element: <About /> },
        { path: "*", element: <Error404 /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
