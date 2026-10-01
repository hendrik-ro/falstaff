export default function Cookies() {
  return (
    <div>
      <h2>Types of browser storage</h2>
      <table>
        <caption>Browser storage comparison</caption>
        <thead>
          <tr>
            <th></th>
            <th scope="col">Cookies</th>
            <th scope="col">localStorage</th>
            <th scope="col">sessionStorage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Server access?</th>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <th scope="row">Storage</th>
            <td>4 KB</td>
            <td>10 MB</td>
            <td>5 MB</td>
          </tr>
          <tr>
            <th scope="row">Expiration</th>
            <td>Custom</td>
            <td>Manual deletion</td>
            <td>Closed tab</td>
          </tr>
          <tr>
            <th scope="row">Browser</th>
            <td>HTML4, HTML5</td>
            <td>HTML5</td>
            <td>HTML5</td>
          </tr>
          <tr>
            <th scope="row">Access</th>
            <td>Any window</td>
            <td>Any window</td>
            <td>Same tab</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
