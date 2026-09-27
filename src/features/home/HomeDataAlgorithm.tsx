import FlexGroup from "../../components/FlexGroup";

export default function HomeContentDataAlgorithm() {
  const internalContent = [
    {
      title: "Sort",
      path: "/data/sort",
      tooltip: "Sorting algorithms",
    },
  ];

  const placeholders = ["Search"];

  return (
    <div>
      <h3>Data</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>Data structures and algorithms.</p>
      <FlexGroup internalContent={internalContent} placeholders={placeholders} />
    </div>
  );
}
