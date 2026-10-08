export default function SQLCommands() {
  return (
    <div>
      <h2>SQL Commands</h2>

      <h3>Data Manipulation Language (DML)</h3>
      <table style={{ textAlign: "center", marginBottom: "40px" }}>
        <caption>DML commands for data operations</caption>
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
            <td>TRUNCATE</td>
            <td>Remove all records from table</td>
            <td>TRUNCATE TABLE</td>
            <td>TRUNCATE TABLE</td>
            <td>DELETE FROM (no TRUNCATE)</td>
          </tr>
        </tbody>
      </table>

      <h3>Data Definition Language (DDL)</h3>
      <table style={{ textAlign: "center", marginBottom: "40px" }}>
        <caption>DDL commands for database structure</caption>
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
            <td>CREATE DATABASE/SCHEMA</td>
            <td>Create a database/schema</td>
            <td>CREATE DATABASE / CREATE SCHEMA</td>
            <td>CREATE DATABASE / CREATE SCHEMA</td>
            <td>- (attaches to file)</td>
          </tr>
          <tr>
            <td>DROP DATABASE/SCHEMA</td>
            <td>Remove a database/schema</td>
            <td>DROP DATABASE / DROP SCHEMA</td>
            <td>DROP DATABASE / DROP SCHEMA</td>
            <td>- (removes file)</td>
          </tr>
        </tbody>
      </table>

      <h3>Transaction Control Language (TCL)</h3>
      <table style={{ textAlign: "center", marginBottom: "40px" }}>
        <caption>Transaction control commands</caption>
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
            <td>BEGIN</td>
            <td>Start a transaction</td>
            <td>START TRANSACTION / BEGIN</td>
            <td>BEGIN / BEGIN WORK / BEGIN TRANSACTION</td>
            <td>BEGIN / BEGIN TRANSACTION / BEGIN IMMEDIATE / BEGIN EXCLUSIVE</td>
          </tr>
          <tr>
            <td>COMMIT</td>
            <td>Save a transaction</td>
            <td>COMMIT / COMMIT WORK</td>
            <td>COMMIT / COMMIT WORK</td>
            <td>COMMIT / COMMIT TRANSACTION</td>
          </tr>
          <tr>
            <td>ROLLBACK</td>
            <td>Undo a transaction</td>
            <td>ROLLBACK / ROLLBACK WORK</td>
            <td>ROLLBACK / ROLLBACK WORK</td>
            <td>ROLLBACK / ROLLBACK TRANSACTION</td>
          </tr>
          <tr>
            <td>SAVEPOINT</td>
            <td>Create a savepoint within transaction</td>
            <td>SAVEPOINT name</td>
            <td>SAVEPOINT name</td>
            <td>SAVEPOINT name</td>
          </tr>
          <tr>
            <td>RELEASE SAVEPOINT</td>
            <td>Remove a savepoint</td>
            <td>RELEASE SAVEPOINT name</td>
            <td>RELEASE SAVEPOINT name</td>
            <td>RELEASE SAVEPOINT name</td>
          </tr>
          <tr>
            <td>ROLLBACK TO SAVEPOINT</td>
            <td>Undo changes to a savepoint</td>
            <td>ROLLBACK TO SAVEPOINT name</td>
            <td>ROLLBACK TO SAVEPOINT name</td>
            <td>ROLLBACK TRANSACTION TO SAVEPOINT name</td>
          </tr>
          <tr>
            <td>SET TRANSACTION</td>
            <td>Configure transaction properties</td>
            <td>SET TRANSACTION ISOLATION LEVEL level</td>
            <td>SET TRANSACTION ISOLATION LEVEL level</td>
            <td>- (use BEGIN IMMEDIATE/EXCLUSIVE)</td>
          </tr>
        </tbody>
      </table>

      <h3>Transaction Isolation Levels</h3>
      <table style={{ textAlign: "center", marginBottom: "40px" }}>
        <caption>Isolation levels for SET TRANSACTION</caption>
        <thead style={{ fontWeight: "bold" }}>
          <tr>
            <td>Isolation Level</td>
            <td>Description</td>
            <td>MySQL</td>
            <td>PostgreSQL</td>
            <td>SQLite</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>READ UNCOMMITTED</td>
            <td>Lowest isolation - dirty reads possible</td>
            <td>READ UNCOMMITTED</td>
            <td>READ UNCOMMITTED</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>READ COMMITTED</td>
            <td>Default in most DBs - non-repeatable reads possible</td>
            <td>READ COMMITTED</td>
            <td>READ COMMITTED</td>
            <td>READ COMMITTED (default)</td>
          </tr>
          <tr>
            <td>REPEATABLE READ</td>
            <td>Higher isolation - phantom reads possible</td>
            <td>REPEATABLE READ</td>
            <td>REPEATABLE READ</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>SERIALIZABLE</td>
            <td>Highest isolation - full isolation</td>
            <td>SERIALIZABLE</td>
            <td>SERIALIZABLE</td>
            <td>SERIALIZABLE</td>
          </tr>
        </tbody>
      </table>

      <h3>Locking Commands</h3>
      <table style={{ textAlign: "center" }}>
        <caption>Table and row locking commands</caption>
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
            <td>Autocommit</td>
            <td>Automatically commit each statement</td>
            <td>SET autocommit = 1 / 0</td>
            <td>SET AUTOCOMMIT TO ON / OFF</td>
            <td>PRAGMA auto_vacuum (different concept)</td>
          </tr>
          <tr>
            <td>LOCK TABLES</td>
            <td>Lock table for exclusive access</td>
            <td>LOCK TABLES table READ / WRITE</td>
            <td>LOCK TABLE table IN mode MODE</td>
            <td>- (limited support with BEGIN EXCLUSIVE)</td>
          </tr>
          <tr>
            <td>UNLOCK TABLES</td>
            <td>Release locks</td>
            <td>UNLOCK TABLES</td>
            <td>- (automatic at transaction end)</td>
            <td>- (automatic at transaction end)</td>
          </tr>
          <tr>
            <td>ROW LOCK</td>
            <td>Lock specific rows</td>
            <td>SELECT ... FOR UPDATE</td>
            <td>SELECT ... FOR UPDATE</td>
            <td>SELECT ... FOR UPDATE (requires BEGIN IMMEDIATE)</td>
          </tr>
          <tr>
            <td>SHARED LOCK</td>
            <td>Shared row lock (read)</td>
            <td>SELECT ... LOCK IN SHARE MODE</td>
            <td>SELECT ... FOR SHARE</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>SKIP LOCKED</td>
            <td>Skip locked rows in SELECT</td>
            <td>SELECT ... FOR UPDATE SKIP LOCKED</td>
            <td>SELECT ... FOR UPDATE SKIP LOCKED</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>NOWAIT</td>
            <td>Fail immediately if lock cannot be obtained</td>
            <td>- (use FOR UPDATE NOWAIT in 8.0+)</td>
            <td>SELECT ... FOR UPDATE NOWAIT</td>
            <td>- (not supported)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
