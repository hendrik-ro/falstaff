export default function Authorization() {
  return (
    <div>
      <h2>Authorization Cheat Sheet</h2>

      <h3>Principle of Least Privilege</h3>
      <p>Grant users the minimum permissions necessary to perform their tasks. No more.</p>
      <pre>
{`// Bad: Admin middleware grants all permissions
app.use('/admin', isAdmin, (req, res) => {
  // User has full access - too broad!
});

// Good: Specific route permissions
app.get('/posts/:id', canViewPost, (req, res) => {
  // User can only view this specific post
});
app.post('/posts', canCreatePost, (req, res) => {
  // User can create posts but not delete
});`}
      </pre>

      <h3>Preventing Broken Access Control</h3>
      <p>Always verify permissions on the server. Never trust client-side checks.</p>
      <pre>
{`// ❌ Vulnerable: Only client-side check
// <button onClick={deletePost} hidden={!isAdmin}>

// ✅ Secure: Server-side authorization check
app.delete('/posts/:id', async (req, res) => {
  const post = await db.posts.findOne({ id: req.params.id });
  if (post.authorId !== req.user.id && !req.user.isAdmin) {
    return res.status(403).send('Forbidden');
  }
  // Proceed with deletion
});`}
      </pre>

      <h3>Access Control Models</h3>
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
            <td>Discretionary Access Control - Owners control access</td>
            <td>File systems</td>
          </tr>
          <tr>
            <th scope="row">MAC</th>
            <td>Mandatory Access Control - Central authority controls access</td>
            <td>Military systems</td>
          </tr>
          <tr>
            <th scope="row">RBAC</th>
            <td>Role-Based Access Control - Permissions assigned to roles</td>
            <td>Most web apps</td>
          </tr>
          <tr>
            <th scope="row">ABAC</th>
            <td>Attribute-Based Access Control - Based on attributes/conditions</td>
            <td>Complex policies</td>
          </tr>
        </tbody>
      </table>

      <h3>RBAC vs ABAC</h3>
      <pre>
{`// RBAC: Simple role-based permissions
const ROLES = {
  GUEST: 'guest',
  USER: 'user',
  ADMIN: 'admin'
};

function canEdit(user: User, resource: Resource) {
  return user.role === ROLES.ADMIN || 
         (user.role === ROLES.USER && user.id === resource.ownerId);
}

// ABAC: Attribute-based conditions
function canAccess(user: User, resource: Resource, action: string) {
  return user.department === resource.department &&
         user.clearanceLevel >= resource.requiredClearance &&
         action === 'read';
}`}
      </pre>
      <p>
        <strong>RBAC</strong>: Simple, easy to manage. Good for most applications.<br />
        <strong>ABAC</strong>: Flexible, complex policies. Good for fine-grained control.
      </p>

      <h3>IDOR (Insecure Direct Object Reference)</h3>
      <p>Prevent unauthorized access by checking ownership on every request.</p>
      <pre>
{`// ❌ Vulnerable to IDOR
app.get('/api/documents/:id', async (req, res) => {
  const doc = await db.documents.findOne({ id: req.params.id });
  res.json(doc); // Returns any document!
});

// ✅ Secure against IDOR
app.get('/api/documents/:id', async (req, res) => {
  const doc = await db.documents.findOne({ 
    id: req.params.id,
    ownerId: req.user.id  // Check ownership
  });
  if (!doc) {
    return res.status(404).send('Not found');
  }
  res.json(doc);
});

// ✅ Alternative: Use UUIDs instead of sequential IDs
app.get('/api/documents/:uuid', async (req, res) => {
  const doc = await db.documents.findOne({ 
    uuid: req.params.uuid,
    ownerId: req.user.id
  });
  // ...
});`}
      </pre>
      <p><strong>Key Prevention</strong>: Always validate that the authenticated user owns or has permission to access the requested resource.</p>

      <h3>Quick Checklist</h3>
      <ul>
        <li>Implement server-side authorization checks for every request</li>
        <li>Use indirect references (UUIDs) instead of direct ones (auto-increment IDs)</li>
        <li>Follow principle of least privilege</li>
        <li>Log access control failures (but don't reveal details to users)</li>
        <li>Test with different user roles and permissions</li>
      </ul>
    </div>
  );
}
