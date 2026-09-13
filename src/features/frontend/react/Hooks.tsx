import Syntax from "../../../components/SyntaxHighlighter";
import style from "./React.module.css";

export default function ReactHooks() {
  return (
    <div>
      <h2>Hooks</h2>
      <p>
        <a
          href="https://react.dev/reference/react/hooks"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hooks
        </a>{" "}
        are functions that let you use state and other React features without
        writing a class. There are two rules to follow when using hooks:</p>
      <ol>
        <li>Only call hooks at the top level of a component.</li>
        <li>Only call hooks from React function components.</li>
      </ol>
      <p>
        Never call hooks from inside of loops, conditions, or nested functions.
        Instead, start with <code>useEffect</code> or similar hooks:
      </p>
      <Syntax language="jsx" code={`useEffect(() => {
  if (userName === '') {
    setUserName('guest');
  }
}, [userName]);`} />
      <div className={style.flexContainer}>
        <ReactHooksUseState />
      </div>
    </div>
  );
}

function ReactHooksUseState() {
  return (
    <div className={style.flexItem}>
      <h3>useState</h3>
      <p><code>useState(initialValue)</code> can be used to declare state variables in a component.</p>
      <Syntax language="jsx" code={`const [count, setCount] = useState(0);
const handleChange = () => {
  setCount(prevCount => prevCount + 1);
};`} />
      <p><strong>Note: </strong> it is safer to use <code>setCount(prevCount =&gt; prevCount + 1)</code> when updating state.</p>
    </div>
  );
}
