import FlexGroup from "../../components/FlexGroup";

export default function HomeContentSecurity() {
  const internalContent = [
    {
      title: "Authentication",
      path: "/security/authentication",
      tooltip: "Authenticating users",
    },
  ];
  const placeholders = ["Authorization"];
  return (
    <div>
      <h3>Web Security</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>Creating secure applications.</p>
      <FlexGroup internalContent={internalContent} placeholders={placeholders} />
    </div>
  );
}
