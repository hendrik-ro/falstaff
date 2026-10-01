import Syntax from "../../../components/SyntaxHighlighter";

export default function NodeJS() {
  return (
    <div>
      <h2>Setup</h2>
      <p>
        Most package managers support Node.js installation. Use your package manager to install
        Node.js on your system:
      </p>
      <br style={{ marginTop: "2rem" }} />
      <p>On Fedora: </p>
      <Syntax language="bash" code={`$ sudo dnf install nodejs`} />
      <p>On Arch Linux: </p>
      <Syntax language="bash" code={`$ sudo pacman -S nodejs`} />
      <p>On Ubuntu: </p>
      <Syntax language="bash" code={`$ sudo apt install nodejs`} />
    </div>
  );
}
