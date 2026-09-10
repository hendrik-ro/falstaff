import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import type { Syntax } from "../types/Syntax";

export default function Syntax(props: Syntax) {
  const { language, code, lineNumbers } = props;
  return (
    <SyntaxHighlighter
      language={language}
      style={dracula}
      wrapLines={true}
      wrapLongLines={true}
      showLineNumbers={lineNumbers}
    >
      {code}
    </SyntaxHighlighter>
  );
}
