import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLinks } from "../../navBar/navBarSlice";

export default function React() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setLinks([
        {
          name: "Home",
          href: "/falstaff",
        }
      ])
    );
  }, [dispatch]);

  return (
    <div>

    </div>
  )
}
