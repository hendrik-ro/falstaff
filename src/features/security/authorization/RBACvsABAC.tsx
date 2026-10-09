import Syntax from "../../../components/SyntaxHighlighter";

export default function RBACvsABAC() {
  return (
    <div>
      <h2>RBAC vs ABAC</h2>

      <h3>RBAC: Role-Based Access Control</h3>
      <p>Simple, easy to manage. Good for most applications.</p>

      <Syntax
        language="typescript"
        code={`const ROLES = {
  GUEST: 'guest',
  USER: 'user',
  ADMIN: 'admin'
} as const;

type Role = typeof ROLES[keyof typeof ROLES];

interface User {
  id: string;
  role: Role;
}

interface Resource {
  id: string;
  ownerId: string;
}

function canEdit(user: User, resource: Resource): boolean {
  return user.role === ROLES.ADMIN || 
         (user.role === ROLES.USER && user.id === resource.ownerId);
}

// Usage
app.put('/resources/:id', (req, res) => {
  const user = req.user;
  const resource = await db.resources.findOne({ id: req.params.id });
  
  if (!canEdit(user, resource)) {
    return res.status(403).send('Forbidden');
  }
  // Allow edit
});`}
      />

      <h3>ABAC: Attribute-Based Access Control</h3>
      <p>Flexible, complex policies. Good for fine-grained control.</p>

      <Syntax
        language="typescript"
        code={`interface User {
  id: string;
  department: string;
  clearanceLevel: number;
  roles: string[];
}

interface Resource {
  id: string;
  department: string;
  requiredClearance: number;
  ownerId: string;
}

function canAccess(
  user: User,
  resource: Resource,
  action: 'read' | 'write' | 'delete'
): boolean {
  // Same department
  const sameDept = user.department === resource.department;
  
  // Sufficient clearance
  const hasClearance = user.clearanceLevel >= resource.requiredClearance;
  
  // Role-based checks
  const isOwner = user.id === resource.ownerId;
  const isAdmin = user.roles.includes('admin');
  
  // Action-specific rules
  if (action === 'read') return sameDept && hasClearance;
  if (action === 'write') return (sameDept && hasClearance) || isOwner || isAdmin;
  if (action === 'delete') return isOwner || isAdmin;
  
  return false;
}

// Usage
app.delete('/resources/:id', async (req, res) => {
  const user = req.user;
  const resource = await db.resources.findOne({ id: req.params.id });
  
  if (!canAccess(user, resource, 'delete')) {
    return res.status(403).send('Forbidden');
  }
  // Allow deletion
});`}
      />

      <h3>Comparison</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>RBAC</th>
            <th>ABAC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Complexity</th>
            <td>Low</td>
            <td>High</td>
          </tr>
          <tr>
            <th scope="row">Flexibility</th>
            <td>Limited</td>
            <td>High</td>
          </tr>
          <tr>
            <th scope="row">Maintenance</th>
            <td>Easy</td>
            <td>Complex</td>
          </tr>
          <tr>
            <th scope="row">Use Case</th>
            <td>80% of applications</td>
            <td>Complex requirements</td>
          </tr>
        </tbody>
      </table>

      <h3>When to Use Which</h3>
      <ul>
        <li>
          <strong>Start with RBAC</strong> - Most applications don't need ABAC complexity
        </li>
        <li>
          <strong>Add ABAC later</strong> - If requirements become too complex for RBAC
        </li>
        <li>
          <strong>Hybrid approach</strong> - Use RBAC for most cases, ABAC for edge cases
        </li>
      </ul>
    </div>
  );
}
