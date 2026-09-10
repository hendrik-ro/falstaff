import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  clearChapterLinks,
  setChapterLinks,
  setLinks,
} from "../../navBar/navBarSlice";

export default function React() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setLinks([
        {
          name: "Home",
          to: "/falstaff",
        },
      ]),
    );
    dispatch(
      setChapterLinks([
        {
          name: "React",
          to: "/falstaff/frontend/react",
        },
        {
          name: "Frameworks",
          to: "/falstaff/frontend/react/frameworks",
        },
      ]),
    );

    // Clear chapter links on unmount
    return () => {
      dispatch(clearChapterLinks());
    };
  }, [dispatch]);

  return (
    <div>
      <h1>React</h1>
    </div>
  );
}
