export default function SQLCommands() {
  return (
    <div>
      <h2>Common SQL Commands</h2>
      <table style={{ textAlign: "center" }}>
        <caption>Common SQL commands and their aliases</caption>
        <thead style={{ fontWeight: "bold" }}>
          <tr>
            <td>Command</td>
            <td>Description</td>
            <td>MySQL</td>
            <td>PostgreSQL</td>
            <td>SQLite</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SELECT</td>
            <td>Retrieve data from table(s)</td>
            <td>SELECT</td>
            <td>SELECT</td>
            <td>SELECT</td>
          </tr>
          <tr>
            <td>INSERT</td>
            <td>Add new records</td>
            <td>INSERT INTO</td>
            <td>INSERT INTO</td>
            <td>INSERT INTO</td>
          </tr>
          <tr>
            <td>UPDATE</td>
            <td>Modify existing records</td>
            <td>UPDATE</td>
            <td>UPDATE</td>
            <td>UPDATE</td>
          </tr>
          <tr>
            <td>DELETE</td>
            <td>Remove records</td>
            <td>DELETE FROM</td>
            <td>DELETE FROM</td>
            <td>DELETE FROM</td>
          </tr>
          <tr>
            <td>CREATE TABLE</td>
            <td>Create a new table</td>
            <td>CREATE TABLE</td>
            <td>CREATE TABLE</td>
            <td>CREATE TABLE</td>
          </tr>
          <tr>
            <td>ALTER TABLE</td>
            <td>Modify table structure</td>
            <td>ALTER TABLE</td>
            <td>ALTER TABLE</td>
            <td>ALTER TABLE</td>
          </tr>
          <tr>
            <td>DROP TABLE</td>
            <td>Remove a table</td>
            <td>DROP TABLE</td>
            <td>DROP TABLE</td>
            <td>DROP TABLE</td>
          </tr>
          <tr>
            <td>CREATE INDEX</td>
            <td>Create an index</td>
            <td>CREATE INDEX</td>
            <td>CREATE INDEX</td>
            <td>CREATE INDEX</td>
          </tr>
          <tr>
            <td>DROP INDEX</td>
            <td>Remove an index</td>
            <td>DROP INDEX / ALTER TABLE DROP INDEX</td>
            <td>DROP INDEX</td>
            <td>DROP INDEX</td>
          </tr>
          <tr>
            <td>CREATE DATABASE</td>
            <td>Create a database</td>
            <td>CREATE DATABASE / CREATE SCHEMA</td>
            <td>CREATE DATABASE</td>
            <td>- (attaches to file)</td>
          </tr>
          <tr>
            <td>DROP DATABASE</td>
            <td>Remove a database</td>
            <td>DROP DATABASE / DROP SCHEMA</td>
            <td>DROP DATABASE</td>
            <td>- (removes file)</td>
          </tr>
          <tr>
            <td>TRUNCATE</td>
            <td>Remove all records from table</td>
            <td>TRUNCATE TABLE</td>
            <td>TRUNCATE TABLE</td>
            <td>DELETE FROM (no TRUNCATE)</td>
          </tr>
          <tr>
            <td>CREATE VIEW</td>
            <td>Create a view</td>
            <td>CREATE VIEW</td>
            <td>CREATE VIEW</td>
            <td>CREATE VIEW</td>
          </tr>
          <tr>
            <td>DROP VIEW</td>
            <td>Remove a view</td>
            <td>DROP VIEW</td>
            <td>DROP VIEW</td>
            <td>DROP VIEW</td>
          </tr>
          <tr>
            <td>BEGIN</td>
            <td>Start a transaction</td>
            <td>START TRANSACTION / BEGIN</td>
            <td>BEGIN</td>
            <td>BEGIN</td>
          </tr>
          <tr>
            <td>COMMIT</td>
            <td>Save a transaction</td>
            <td>COMMIT</td>
            <td>COMMIT</td>
            <td>COMMIT</td>
          </tr>
          <tr>
            <td>ROLLBACK</td>
            <td>Undo a transaction</td>
            <td>ROLLBACK</td>
            <td>ROLLBACK</td>
            <td>ROLLBACK</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
