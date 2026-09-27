import Syntax from "../../../components/SyntaxHighlighter";

export default function PostgreSQLCmds() {
  return (
    <div>
      <h2>PSQL commands</h2>
      <div className="flexContainer">
        <PostgreSQLCmdsBasic />
        <PostgreSQLCmdsDBCreate />
        <PostgreSQLCmdsDBInfo />
        <PostgreSQLCmdsDBList />
        <PostgreSQLCmdsVersion />
      </div>
    </div>
  );
}

function PostgreSQLCmdsBasic() {
  return (
    <div className="flexItem">
      <h3>Basic</h3>
      <Syntax
        language="bash"
        code={`# Exit
$ \\q

# Help for SQL commands
$ \\help CREATE TABLE

# Help for psql commands
$ \\?

# Current DB and user
$ \\conninfo

# Exec system commands
$ \\! ls
`}
      />
    </div>
  );
}

function PostgreSQLCmdsDBCreate() {
  return (
    <div className="flexItem">
      <h3>Create Database</h3>
      <Syntax
        language="bash"
        code={`# Create a new database
$ CREATE DATABASE mydatabase;

# Create database with owner
$ CREATE DATABASE mydatabase OWNER myuser;

# Create database with encoding
$ CREATE DATABASE mydatabase
WITH ENCODING 'UTF8'
LC_COLLATE='en_US.UTF-8'
LC_CTYPE='en_US.UTF-8';
`}
      />
    </div>
  );
}

function PostgreSQLCmdsDBInfo() {
  return (
    <div className="flexItem">
      <h3>Database Info</h3>
      <Syntax
        language="bash"
        code={`# List all tables
$ \\dt

# List all tables with details
$ \\dt+

# Describe specific table
$ \\d table_name

# List all schemas
$ \\dn

# List all users/roles
$ \\du
`}
      />
    </div>
  );
}

function PostgreSQLCmdsDBList() {
  return (
    <div className="flexItem">
      <h3>List Database</h3>
      <Syntax
        language="bash"
        code={`# List all databases
$ \\l

# List databases with detailed info
$ \\l+

# Connect to different database
$ \\c database_name
`}
      />
    </div>
  );
}

function PostgreSQLCmdsVersion() {
  return (
    <div className="flexItem">
      <h3>Version & Settings</h3>
      <Syntax
        language="bash"
        code={`# Check PostgreSQL version
$ SELECT version();

# Show current settings
$ SHOW ALL;

# Show specific setting
$ SHOW max_connections;

# Set configuration parameter
SET work_mem = '256MB';
`}
      />
    </div>
  );
}
