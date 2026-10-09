import Syntax from "../../../components/SyntaxHighlighter";

export default function BrokenAccessControl() {
  return (
    <div>
      <h2>Preventing Broken Access Control</h2>
      <p>Always verify permissions on the server. Never trust client-side checks.</p>

      <h3>Vulnerable Example</h3>
      <p>Only client-side check (easily bypassed):</p>
      <Syntax
        language="jsx"
        code={`// Client-side only - attackers can call deletePost directly via API
<button onClick={deletePost} hidden={!isAdmin}>
  Delete Post
</button>`}
      />

      <h3>Secure Example</h3>
      <p>Server-side authorization check:</p>
      <Syntax
        language="typescript"
        code={`import { Request, Response } from 'express';

app.delete('/posts/:id', async (req: Request, res: Response) => {
  const post = await db.posts.findOne({ id: req.params.id });
  
  // Check if user is admin OR owns the post
  if (post?.authorId !== req.user.id && !req.user.isAdmin) {
    return res.status(403).send('Forbidden');
  }
  
  // Proceed with deletion
  await db.posts.deleteOne({ id: req.params.id });
  res.status(200).send('Post deleted');
});`}
      />

      <h3>Key Prevention</h3>
      <ul>
        <li>Never rely on client-side checks alone</li>
        <li>Always validate permissions on the server for every request</li>
        <li>Return 403 Forbidden (not 404) when access is denied to avoid information leakage</li>
      </ul>
    </div>
  );
}
