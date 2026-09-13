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
        writing a class. There are two rules to follow when using hooks:
      </p>
      <ol>
        <li>Only call hooks at the top level of a component.</li>
        <li>Only call hooks from React function components.</li>
      </ol>
      <p>
        Never call hooks from inside of loops, conditions, or nested functions.
        Instead, start with <code>useEffect</code> or similar hooks:
      </p>
      <Syntax
        language="javascript"
        code={`useEffect(() => {
  if (userName === '') {
    setUserName('guest');
  }
}, [userName]);`}
      />
      <div className={style.flexContainer}>
        <ReactHooksUseState />
        <ReactHooksUseEffect />
      </div>
      <br style={{ marginTop: "2rem" }} />
    </div>
  );
}

function ReactHooksUseState() {
  return (
    <div className={style.flexItem}>
      <h3>useState</h3>
      <p>
        <code>useState(initialValue)</code> can be used to declare state
        variables in a component.
      </p>
      <Syntax
        language="javascript"
        code={`const [count, setCount] = useState(0);
const handleChange = () => {
  setCount(prevCount => prevCount + 1);
};`}
      />
      <p>
        <strong>Note: </strong> it is safer to use{" "}
        <code>setCount(prevCount =&gt; prevCount + 1)</code> when updating
        state.
      </p>
      <p>
        To handle arrays or objects in <code>useState</code>, use the spread
        operator to create a new copy of the state value:
      </p>
      <Syntax
        language="javascript"
        code={`const [list, setList] = useState([]);
const handleChange = (newItem) => {
  setList(prevList => [...prevList, newItem]);
};`}
      />
      <p>Or an object:</p>
      <Syntax
        language="javascript"
        code={`const [object, setObject] = useState({});
const handleChange = (newItem) => {
  setObject(prevObject => ({ ...prevObject, ...newItem }));
};`}
      />
    </div>
  );
}

function ReactHooksUseEffect() {
  return (
    <div className={style.flexItem}>
      <h3>useEffect</h3>
      <p>
        <code>useEffect</code> can be used to perform side effects in a
        component such as fetching data or updating the DOM.
      </p>
      <p>
        This can be done at three different points in a component's lifecycle:
        mounting, updating, and unmounting.
      </p>
      <Syntax
        language="javascript"
        code={`useEffect(() => {
  const intervalId = setInterval(() => {
    setTime((prev) => prev + 1);
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
}, []); // pass an empty array to run the effect only once`}
      />
      <p>
        The dependency array passed to <code>useEffect</code> determines when
        the effect should run. An empty array means the effect will only run
        once, after the component mounts. Passing a non-empty array will run the
        effect whenever the values in the array change e.g. <code>[count]</code>
        .
      </p>
    </div>
  );
}
