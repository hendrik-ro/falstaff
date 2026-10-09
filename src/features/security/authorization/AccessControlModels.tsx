import Syntax from "../../../components/SyntaxHighlighter";

export default function AccessControlModels() {
  return (
    <div>
      <h2>Access Control Models</h2>

      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Description</th>
            <th>Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">DAC</th>
            <td>Discretionary Access Control - Owners control access to their objects</td>
            <td>File systems (e.g., Unix file permissions)</td>
          </tr>
          <tr>
            <th scope="row">MAC</th>
            <td>
              Mandatory Access Control - Central authority controls access based on security labels
            </td>
            <td>Military systems, high-security environments</td>
          </tr>
          <tr>
            <th scope="row">RBAC</th>
            <td>
              Role-Based Access Control - Permissions assigned to roles, users inherit role
              permissions
            </td>
            <td>Most web applications</td>
          </tr>
          <tr>
            <th scope="row">ABAC</th>
            <td>
              Attribute-Based Access Control - Access based on attributes, policies, and
              relationships
            </td>
            <td>Complex systems with fine-grained requirements</td>
          </tr>
        </tbody>
      </table>

      <h3>Code Examples</h3>

      <h4>DAC-like (Owner-based)</h4>
      <Syntax
        language="typescript"
        code={`app.get('/documents/:id', async (req: Request, res: Response) => {
  const doc = await db.documents.findOne({ id: req.params.id });
  if (doc?.ownerId !== req.user.id) {
    return res.status(403).send('Forbidden');
  }
  res.json(doc);
});`}
      />

      <h4>RBAC-like (Role-based)</h4>
      <Syntax
        language="typescript"
        code={`const ROLES = {
  GUEST: 'guest',
  USER: 'user',
  EDITOR: 'editor',
  ADMIN: 'admin'
} as const;

type Role = typeof ROLES[keyof typeof ROLES];

const canEditDocument = (user: { role: Role }, doc: { ownerId: string }) => {
  return user.role === ROLES.ADMIN || 
         (user.role === ROLES.EDITOR && doc.ownerId === user.id);
};`}
      />

      <h4>ABAC-like (Attribute-based)</h4>
      <Syntax
        language="typescript"
        code={`const canAccess = (
  user: { department: string; clearanceLevel: number },
  resource: { department: string; requiredClearance: number },
  action: string
) => {
  return user.department === resource.department &&
         user.clearanceLevel >= resource.requiredClearance &&
         (action === 'read' || user.clearanceLevel >= 5);
};`}
      />
    </div>
  );
}
