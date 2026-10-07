export default function SQLTransactions() {
  return (
    <div>
      <h2>Transaction Control</h2>
      <table style={{ textAlign: "center" }}>
        <caption>Transaction control commands and their aliases</caption>
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
            <td>Start Transaction</td>
            <td>Begin a new transaction</td>
            <td>START TRANSACTION, BEGIN</td>
            <td>BEGIN, BEGIN WORK, BEGIN TRANSACTION</td>
            <td>BEGIN, BEGIN TRANSACTION, BEGIN IMMEDIATE, BEGIN EXCLUSIVE</td>
          </tr>
          <tr>
            <td>Commit</td>
            <td>Save all changes permanently</td>
            <td>COMMIT, COMMIT WORK</td>
            <td>COMMIT, COMMIT WORK</td>
            <td>COMMIT, COMMIT TRANSACTION</td>
          </tr>
          <tr>
            <td>Rollback</td>
            <td>Undo all changes in current transaction</td>
            <td>ROLLBACK, ROLLBACK WORK</td>
            <td>ROLLBACK, ROLLBACK WORK</td>
            <td>ROLLBACK, ROLLBACK TRANSACTION</td>
          </tr>
          <tr>
            <td>Savepoint</td>
            <td>Create a savepoint within transaction</td>
            <td>SAVEPOINT name</td>
            <td>SAVEPOINT name</td>
            <td>SAVEPOINT name</td>
          </tr>
          <tr>
            <td>Release Savepoint</td>
            <td>Remove a savepoint</td>
            <td>RELEASE SAVEPOINT name</td>
            <td>RELEASE SAVEPOINT name</td>
            <td>RELEASE SAVEPOINT name</td>
          </tr>
          <tr>
            <td>Rollback to Savepoint</td>
            <td>Undo changes to a savepoint</td>
            <td>ROLLBACK TO SAVEPOINT name</td>
            <td>ROLLBACK TO SAVEPOINT name</td>
            <td>ROLLBACK TRANSACTION TO SAVEPOINT name</td>
          </tr>
          <tr>
            <td>Set Transaction</td>
            <td>Configure transaction properties</td>
            <td>SET TRANSACTION ISOLATION LEVEL level</td>
            <td>SET TRANSACTION ISOLATION LEVEL level</td>
            <td>- (use BEGIN IMMEDIATE/EXCLUSIVE)</td>
          </tr>
          <tr>
            <td>Isolation Level - Read Uncommitted</td>
            <td>Lowest isolation - dirty reads possible</td>
            <td>READ UNCOMMITTED</td>
            <td>READ UNCOMMITTED</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>Isolation Level - Read Committed</td>
            <td>Default in most DBs - non-repeatable reads possible</td>
            <td>READ COMMITTED</td>
            <td>READ COMMITTED</td>
            <td>READ COMMITTED (default)</td>
          </tr>
          <tr>
            <td>Isolation Level - Repeatable Read</td>
            <td>Higher isolation - phantom reads possible</td>
            <td>REPEATABLE READ</td>
            <td>REPEATABLE READ</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>Isolation Level - Serializable</td>
            <td>Highest isolation - full isolation</td>
            <td>SERIALIZABLE</td>
            <td>SERIALIZABLE</td>
            <td>SERIALIZABLE</td>
          </tr>
          <tr>
            <td>Autocommit</td>
            <td>Automatically commit each statement</td>
            <td>SET autocommit = 1 / 0</td>
            <td>SET AUTOCOMMIT TO ON / OFF</td>
            <td>PRAGMA auto_vacuum (different concept)</td>
          </tr>
          <tr>
            <td>Lock Table</td>
            <td>Lock table for exclusive access</td>
            <td>LOCK TABLES table READ / WRITE</td>
            <td>LOCK TABLE table IN mode MODE</td>
            <td>- (limited support with BEGIN EXCLUSIVE)</td>
          </tr>
          <tr>
            <td>Unlock Table</td>
            <td>Release locks</td>
            <td>UNLOCK TABLES</td>
            <td>- (automatic at transaction end)</td>
            <td>- (automatic at transaction end)</td>
          </tr>
          <tr>
            <td>Row Lock</td>
            <td>Lock specific rows</td>
            <td>SELECT ... FOR UPDATE</td>
            <td>SELECT ... FOR UPDATE</td>
            <td>SELECT ... FOR UPDATE (requires BEGIN IMMEDIATE)</td>
          </tr>
          <tr>
            <td>Shared Lock</td>
            <td>Shared row lock (read)</td>
            <td>SELECT ... LOCK IN SHARE MODE</td>
            <td>SELECT ... FOR SHARE</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>Skip Locked</td>
            <td>Skip locked rows in SELECT</td>
            <td>SELECT ... FOR UPDATE SKIP LOCKED</td>
            <td>SELECT ... FOR UPDATE SKIP LOCKED</td>
            <td>- (not supported)</td>
          </tr>
          <tr>
            <td>Nowait</td>
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
