import { useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div className="Error404">
      <h1>404 Not Found</h1>
      <p>The page you were looking for does not exist.</p>
      <button onClick={() => navigate("/falstaff")}>Back</button>
    </div>
  );
}
