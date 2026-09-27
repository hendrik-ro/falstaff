import { useDispatch, useSelector } from "react-redux";
import { selectActiveChapter, setActiveChapter, setChapterLinks } from "../../navBar/navBarSlice";
import { useEffect } from "react";
import Syntax from "../../../components/SyntaxHighlighter";
import PostgreSQLCmds from "./PostgresCmds";

export default function Postgres() {
  const dispatch = useDispatch();
  const activeChapter = useSelector(selectActiveChapter);

  useEffect(() => {
    dispatch(
      setChapterLinks([
        {
          name: "PostgreSQL",
          active: true,
        },
        {
          name: "PSQL Commands",
          active: false,
        },
      ]),
    );
    dispatch(setActiveChapter("PostgreSQL"));

    return () => {
      dispatch(setChapterLinks([]));
      dispatch(setActiveChapter(""));
    };
  }, [dispatch]);

  return (
    <div>
      <h1>PostgreSQL</h1>
      <p>Open-source object-relational database.</p>
      {activeChapter === "PostgreSQL" && <PostgreSQLSetup />}
      {activeChapter === "PSQL Commands" && <PostgreSQLCmds />}
      <br style={{ marginTop: "2rem" }} />
    </div>
  );
}

function PostgreSQLSetup() {
  return (
    <div>
      <h2>Setup</h2>
      <PostgreSQLSetupContainer />
    </div>
  );
}

function PostgreSQLSetupContainer() {
  return (
    <div>
      <p>Install PostgreSQL and its dependencies:</p>
      <Syntax
        language="bash"
        code={`# install postgresql
$ sudo dnf install postgresql`}
      />
      <p>
        To pull the image use <em>podman</em> or <em>docker</em>:
      </p>
      <Syntax
        language="bash"
        code={`# pull image
$ podman pull postgres

# verify image
$ podman images | grep postgres`}
      />
      <p>To create a container:</p>
      <Syntax
        language="bash"
        code={`# Run PostgreSQL with a superuser password
$ podman run -d
  --name my-postgres
  -p 5432:5432
  -e POSTGRES_PASSWORD=my-secret-password
  docker.io/library/postgres:latest
  # for persistant storage add
  -v pgdata:/var/lib/postgresql

# Confirm the container is running
$ podman ps -a
`}
      />
      <p>To connect to the container use:</p>
      <Syntax
        language="bash"
        code={`# using podman
$ podman exec -it my-postgres psql -U postgres

# using psql (requires PostgreSQL installed locally)
$ psql -h localhost -p 5432 -U postgres
`}
      />
    </div>
  );
}
