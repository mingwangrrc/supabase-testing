import { supabase } from "@/lib/supabaseClient";

interface TestAddress {
  id: number;
  Address: string;
  Path_ID: string;
  Names: string;
}

export default async function TablePage() {
  const { data, error } = await supabase
    .from<TestAddress>("Test_Address")
    .select("*");

  if (error) {
    console.error(error);
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Supabase Table</h1>
        <p>Error loading data: {error.message}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Supabase Table</h1>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>ID</th>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Address</th>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Path ID</th>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Names</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => (
            <tr key={row.id}>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{row.id}</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{row.Address}</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{row.Path_ID}</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{row.Names}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
