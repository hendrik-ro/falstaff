import Syntax from "../../../components/SyntaxHighlighter";

export default function BcryptHashing() {
  return (
    <div>
      <h2>Hashing</h2>
      <div className="flexContainer">
        <Hashing />
        <Verification />
      </div>
    </div>
  );
}

function Hashing() {
  return (
    <div className="flexItem">
      <h3>Hash password</h3>
      <Syntax
        language="typescript"
        code={`import bcrypt from "bcrypt";

const passwordHash = async (
  password: string,
  saltRounds: number
): Promise<string | null> => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    // Alternatively call directly:
    // const hash = await bcrypt.hash(password, saltRounds);
    // bcrypt.hash will create the salt automatically
    return hash;
  } catch (err) {
    console.error(err);
    return null;
  }
};
`}
        lineNumbers={true}
      />
    </div>
  );
}

function Verification() {
  return (
    <div className="flexItem">
      <h3>Verify password</h3>
      <Syntax
        language="typescript"
        code={`import bcrypt from "bcrypt";

const verifyPassword = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  try {
    // bcrypt deduces the salt automatically
    const matchFound = await bcrypt.compare(password, hash);
    return matchFound;
  } catch (err) {
    console.error(err);
  }
  return false;
};
`}
        lineNumbers={true}
      />
    </div>
  );
}
