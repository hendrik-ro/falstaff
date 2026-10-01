import Syntax from "../../../components/SyntaxHighlighter";

export default function Postgres() {
  return (
    <div>
      <h2>Setup</h2>
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
