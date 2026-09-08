import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLinks } from "../features/navLinks/navLinksSlice";

export default function Error404() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setLinks([
        {
          name: "Home",
          to: "/",
        },
      ]),
    );
  }, [dispatch]);

  return (
    <div className="errorPage">
      <h1>Falstaff</h1>
      <h2>Page Not Found</h2>
      <p>The page you were looking for does not exist.</p>
      <button onClick={() => navigate("/")}>Back Home</button>
    </div>
  );
}
