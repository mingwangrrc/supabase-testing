import React from "react";

export default function TablePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Supabase Table</h1>
      <p>This page will display data from Supabase.</p>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>ID</th>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>1</td>
            <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Example</td>
            <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>42</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
