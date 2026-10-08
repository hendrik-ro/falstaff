export default function SQLConstraints() {
  return (
    <div>
      <h2>Constraints and Column Modifiers</h2>
      <table style={{ textAlign: "center" }}>
        <caption>Table and column constraints with database-specific syntax</caption>
        <thead style={{ fontWeight: "bold" }}>
          <tr>
            <td>Constraint/Modifier</td>
            <td>Description</td>
            <td>MySQL</td>
            <td>PostgreSQL</td>
            <td>SQLite</td>
          </tr>
        </thead>
        <tbody>
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
          <tr>
            <td colSpan={5} style={{ fontWeight: "bold" }}>
              ALTER TABLE Actions
            </td>
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
        </tbody>
      </table>
    </div>
  );
}
