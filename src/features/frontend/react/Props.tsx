import Syntax from "../../../components/SyntaxHighlighter";

export default function ReactProps() {
  return (
    <div>
      <h2>React Props</h2>
      <p>
        Props are properties passed to React components. They can be destructured using the spread
        operator.
      </p>
      <Syntax
        language="tsx"
        code={`export default function Component(props: Props) {
  const { title, onClick } = props;
  return (
    <div>
      <h3>{title}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}`}
      />
      <p>
        Conventionally, functions are named handleEvent and onEvent and passed into components as
        props:
      </p>
      <Syntax
        language="tsx"
        code={`export default function App() {
        const title = "Title";
        const handleEvent = () => {
          console.log("Event handled");
        };
        return (
          <div>
            <Component onClick={handleEvent} title={title} />
          </div>
        );
      }`}
      />
      <div className="flexContainer">
        <ReactPropsChildren />
        <ReactPropsDefaultValues />
      </div>
      <br style={{ marginTop: "2rem" }} />
    </div>
  );
}

function ReactPropsChildren() {
  return (
    <div className="flexItem">
      <h3>Props Children</h3>
      <p>Every props object has a children property that contains the component's children.</p>
      <Syntax
        language="tsx"
        code={`export default function App() {
  return (
    <div>
      <List">
        <li>Item 1</li> // children
        <li>Item 2</li>
        <li>Item 3</li>
      </List>
    </div>
  );
}

function List(props) {
  return (
    <div>
      <ul>
        {props.children}
      </ul>
    </div>
  );
}`}
        lineNumbers={true}
      />
    </div>
  );
}

function ReactPropsDefaultValues() {
  return (
    <div className="flexItem">
      <h3>Props Default Values</h3>
      <p>You can specify default values for props using the defaultProps property:</p>
      <Syntax
        language="tsx"
        code={`export default function Component({ title = "Default Title" }) {
  return (
    <div>
      <h3>{title}</h3>
      (...)
    </div>
  );
}`}
      />
    </div>
  );
}
