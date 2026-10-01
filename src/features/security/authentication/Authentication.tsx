export default function Authentication() {
  return (
    <div>
      <h2>Types of authentication</h2>
      <p>To identify a user, a combination of three authentication stypes is used.</p>
      <br style={{ marginTop: "1rem" }} />
      <table>
        <caption>Different authentication types</caption>
        <thead>
          <tr>
            <th>Type</th>
            <th>Desciption</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Knowledge</th>
            <td>Something the user knows</td>
            <td>Password, PIN</td>
          </tr>
          <tr>
            <th scope="row">Ownership</th>
            <td>Something the user has</td>
            <td>ID card, security token</td>
          </tr>
          <tr>
            <th scope="row">Inherence</th>
            <td>Something the user is or does</td>
            <td>Fingerprint, face scan, retina scan</td>
          </tr>
        </tbody>
      </table>
      <br style={{ marginTop: "1rem" }} />
      <p>
        Furthermore, a <em>single-factor authentication</em> provides lower certainty than{" "}
        <em>multi-factor authentication</em>.
      </p>
    </div>
  );
}
