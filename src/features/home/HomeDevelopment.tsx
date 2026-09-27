import FlexGroup from "../../components/FlexGroup";

export default function HomeContentDevelopment() {
  const internalContent = [
    {
      title: "Testing",
      path: "/dev/testing",
      tooltip: "Testing in development",
    },
  ];
  const placeholders = ["CI/CD"];
  return (
    <div>
      <h3>Development</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>Development methods.</p>
      <FlexGroup internalContent={internalContent} placeholders={placeholders} />
    </div>
  );
}
