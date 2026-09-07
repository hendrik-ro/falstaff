import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLinks } from "../../features/navLinks/navLinksSlice";

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
      <h1>404 Not Found</h1>
      <p>The page you were looking for does not exist.</p>
      <button onClick={() => navigate("/falstaff")}>Back Home</button>
    </div>
  );
}
