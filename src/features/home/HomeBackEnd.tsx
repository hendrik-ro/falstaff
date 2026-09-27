import FlexGroup from "../../components/FlexGroup";

export default function HomeContentBackEnd() {
  const internalContent = [
    {
      title: "Node.js",
      path: "/backend/nodejs",
      tooltip: "Node.js",
    },
    {
      title: "Express.js",
      path: "/backend/expressjs",
      tooltip: "Express.js",
    },
    {
      title: "CORS",
      path: "/backend/cors",
      tooltip: "Cross-origin resource sharing",
    },
    {
      title: "PostgreSQL",
      path: "/backend/postgres",
      tooltip: "PostgreSQL",
    },
  ];
  const externalContent = [
    {
      title: "API",
      path: "https://developer.mozilla.org/en-US/docs/Web/API",
      tooltip: "Mozilla Developer Network`s API documentation",
    },
    {
      title: "Database",
      path: "https://developer.mozilla.org/en-US/docs/Web/API/Database",
      tooltip: "Mozilla Developer Network`s Database documentation",
    },
    {
      title: "Server",
      path: "https://developer.mozilla.org/en-US/docs/Web/API/Server",
      tooltip: "Mozilla Developer Network`s Server documentation",
    },
  ];
  return (
    <div>
      <h3>Back End</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        Back end technologies and libraries.
      </p>
      <FlexGroup internalContent={internalContent} externalContent={externalContent} />
    </div>
  );
}
