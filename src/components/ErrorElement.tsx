import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLinks } from "../features/navBar/navBarSlice";

export default function Error404() {
  const navigate = useNavigate();
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
  }, [dispatch]);

  return (
    <div className="errorPage">
      <div className="errorPage">
        <h1>Falstaff</h1>
        <h2>Page Not Found</h2>
        <p>The page you were looking for does not exist.</p>
      </div>
      <div>
        <button onClick={() => navigate("/falstaff")}>Back Home</button>
      </div>
    </div>
  );
}
