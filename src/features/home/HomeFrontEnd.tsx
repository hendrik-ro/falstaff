import FlexGroup from "../../components/FlexGroup";

export default function HomeContentFrontEnd() {
  const internalContent = [
    {
      title: "DOM",
      path: "/frontend/dom",
      tooltip: "Document Object Model",
    },

    { title: "React.js", path: "/frontend/react", tooltip: "React" },
    {
      title: "Redux.js",
      path: "/frontend/redux",
      tooltip: "Redux & Redux Toolkit",
    },
  ];
  const externalContent = [
    {
      title: "HTML",
      path: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      tooltip: "Mozilla Developer Network`s HTML documentation",
    },
    {
      title: "CSS",
      path: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      tooltip: "Mozilla Developer Network`s CSS documentation",
    },
    {
      title: "JavaScript",
      path: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      tooltip: "Mozilla Developer Network`s JavaScript documentation",
    },
  ];

  return (
    <div>
      <h3>Front End</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        Front end technologies and libraries.
      </p>
      <FlexGroup internalContent={internalContent} externalContent={externalContent} />
    </div>
  );
}
