export default function SQLDDL() {
  return (
    <div>
      <h2>Data Definition Language (DDL)</h2>
      <table style={{ textAlign: "center" }}>
        <caption>DDL commands and their aliases</caption>
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
            <td>Create an index on a table</td>
            <td>CREATE INDEX idx_name ON table(column)</td>
            <td>CREATE INDEX idx_name ON table(column)</td>
            <td>CREATE INDEX idx_name ON table(column)</td>
          </tr>
          <tr>
            <td>DROP INDEX</td>
            <td>Remove an index</td>
            <td>DROP INDEX idx_name ON table / ALTER TABLE table DROP INDEX idx_name</td>
            <td>DROP INDEX idx_name</td>
            <td>DROP INDEX idx_name</td>
          </tr>
          <tr>
            <td>CREATE VIEW</td>
            <td>Create a view</td>
            <td>CREATE VIEW view_name AS SELECT ...</td>
            <td>CREATE VIEW view_name AS SELECT ...</td>
            <td>CREATE VIEW view_name AS SELECT ...</td>
          </tr>
          <tr>
            <td>DROP VIEW</td>
            <td>Remove a view</td>
            <td>DROP VIEW view_name</td>
            <td>DROP VIEW view_name</td>
            <td>DROP VIEW view_name</td>
          </tr>
          <tr>
            <td>CREATE SCHEMA</td>
            <td>Create a schema/database</td>
            <td>CREATE SCHEMA / CREATE DATABASE</td>
            <td>CREATE SCHEMA</td>
            <td>ATTACH DATABASE (for external files)</td>
          </tr>
          <tr>
            <td>DROP SCHEMA</td>
            <td>Remove a schema/database</td>
            <td>DROP SCHEMA / DROP DATABASE</td>
            <td>DROP SCHEMA</td>
            <td>DETACH DATABASE</td>
          </tr>
          <tr>
            <td>TRUNCATE TABLE</td>
            <td>Remove all rows from table</td>
            <td>TRUNCATE TABLE table_name</td>
            <td>TRUNCATE TABLE table_name</td>
            <td>DELETE FROM table_name</td>
          </tr>
          <tr>
            <td>RENAME TABLE</td>
            <td>Rename a table</td>
            <td>RENAME TABLE old TO new / ALTER TABLE old RENAME TO new</td>
            <td>ALTER TABLE old RENAME TO new</td>
            <td>ALTER TABLE old RENAME TO new</td>
          </tr>
          <tr>
            <td>ADD COLUMN</td>
            <td>Add a new column</td>
            <td>ALTER TABLE table ADD COLUMN column type</td>
            <td>ALTER TABLE table ADD COLUMN column type</td>
            <td>ALTER TABLE table ADD COLUMN column type</td>
          </tr>
          <tr>
            <td>DROP COLUMN</td>
            <td>Remove a column</td>
            <td>ALTER TABLE table DROP COLUMN column</td>
            <td>ALTER TABLE table DROP COLUMN column</td>
            <td>ALTER TABLE table DROP COLUMN column</td>
          </tr>
          <tr>
            <td>MODIFY COLUMN</td>
            <td>Change column definition</td>
            <td>ALTER TABLE table MODIFY COLUMN column type</td>
            <td>ALTER TABLE table ALTER COLUMN column TYPE type</td>
            <td>- (limited support)</td>
          </tr>
          <tr>
            <td>ALTER COLUMN</td>
            <td>Change column definition (PostgreSQL style)</td>
            <td>ALTER TABLE table CHANGE COLUMN old new type</td>
            <td>ALTER TABLE table ALTER COLUMN column TYPE type</td>
            <td>-</td>
          </tr>
          <tr>
            <td>CHANGE COLUMN</td>
            <td>Rename and change column</td>
            <td>ALTER TABLE table CHANGE COLUMN old new type</td>
            <td>- (use ALTER COLUMN)</td>
            <td>-</td>
          </tr>
          <tr>
            <td>RENAME COLUMN</td>
            <td>Rename a column</td>
            <td>- (use CHANGE COLUMN)</td>
            <td>ALTER TABLE table RENAME COLUMN old TO new</td>
            <td>ALTER TABLE table RENAME COLUMN old TO new</td>
          </tr>
          <tr>
            <td>ADD CONSTRAINT</td>
            <td>Add a constraint</td>
            <td>ALTER TABLE table ADD CONSTRAINT name type</td>
            <td>ALTER TABLE table ADD CONSTRAINT name type</td>
            <td>ALTER TABLE table ADD CONSTRAINT name type</td>
          </tr>
          <tr>
            <td>DROP CONSTRAINT</td>
            <td>Remove a constraint</td>
            <td>ALTER TABLE table DROP CONSTRAINT name</td>
            <td>ALTER TABLE table DROP CONSTRAINT name</td>
            <td>ALTER TABLE table DROP CONSTRAINT name</td>
          </tr>
          <tr>
            <td>PRIMARY KEY</td>
            <td>Define primary key</td>
            <td>PRIMARY KEY (column(s))</td>
            <td>PRIMARY KEY (column(s))</td>
            <td>PRIMARY KEY (column(s))</td>
          </tr>
          <tr>
            <td>FOREIGN KEY</td>
            <td>Define foreign key</td>
            <td>FOREIGN KEY (column) REFERENCES table(column)</td>
            <td>FOREIGN KEY (column) REFERENCES table(column)</td>
            <td>FOREIGN KEY (column) REFERENCES table(column)</td>
          </tr>
          <tr>
            <td>UNIQUE</td>
            <td>Ensure uniqueness</td>
            <td>UNIQUE (column(s))</td>
            <td>UNIQUE (column(s))</td>
            <td>UNIQUE (column(s))</td>
          </tr>
          <tr>
            <td>CHECK</td>
            <td>Add validation rule</td>
            <td>CHECK (condition)</td>
            <td>CHECK (condition)</td>
            <td>CHECK (condition)</td>
          </tr>
          <tr>
            <td>DEFAULT</td>
            <td>Set default value</td>
            <td>DEFAULT value</td>
            <td>DEFAULT value</td>
            <td>DEFAULT value</td>
          </tr>
          <tr>
            <td>NOT NULL</td>
            <td>Column cannot be NULL</td>
            <td>NOT NULL</td>
            <td>NOT NULL</td>
            <td>NOT NULL</td>
          </tr>
          <tr>
            <td>AUTO_INCREMENT</td>
            <td>Auto-incrementing column</td>
            <td>AUTO_INCREMENT</td>
            <td>SERIAL, BIGSERIAL, IDENTITY (8.0+)</td>
            <td>AUTOINCREMENT</td>
          </tr>
          <tr>
            <td>COMMENT</td>
            <td>Add comment to table/column</td>
            <td>COMMENT ON TABLE / COLUMN</td>
            <td>COMMENT ON TABLE / COLUMN</td>
            <td>- (limited support)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
