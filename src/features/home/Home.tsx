import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLinks } from "../navBar/navBarSlice";
import HomeContentFrontEnd from "./HomeFrontEnd";
import HomeContentBackEnd from "./HomeBackEnd";
import HomeContentDevelopment from "./HomeDevelopment";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setLinks([
        {
          name: "Home",
          to: "/falstaff",
        },
        {
          name: "About",
          to: "/falstaff/about",
        },
      ]),
    );
  }, [dispatch]);

  return (
    <div>
      <HomeHeaders />
      <HomeContent />
      <br style={{ marginBottom: "2rem" }} />
    </div>
  );
}

function HomeHeaders() {
  return (
    <header>
      <h1>Falstaff</h1>
      <h2>Full Stack Cheat Sheet</h2>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        This cheat sheet is work in progress and is continuously updated.
      </p>
    </header>
  );
}

function HomeContent() {
  return (
    <div className="groupedColumns">
      <HomeContentFrontEnd />
      <HomeContentBackEnd />
      <HomeContentDevelopment />
    </div>
  );
}
