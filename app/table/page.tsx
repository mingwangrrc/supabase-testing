import { supabase } from "@/lib/supabaseClient";

interface TestAddressMap {
  id: number;
  Address: string;
  Path_ID: string;
  Names: string;
}

interface TestOrganizaitons {
  org_id: number;
  address: string;
  organization_name: string;
}

interface TestPartners {
  id: number;
  organization_1: number;
  organization_2: number;
}

export default async function TablePage() {
  const {
    data: addressData,
    error: addressError,
  } = await supabase.from<TestAddressMap>("Test_Address_Map").select("*");

  const {
    data: orgData,
    error: orgError,
  } = await supabase.from<TestOrganizaitons>("Test_Organizaitons").select("*");

  const {
    data: partnerData,
    error: partnerError,
  } = await supabase.from<TestPartners>("Test_Partners").select("*");

  if (addressError || orgError || partnerError) {
    console.error(addressError || orgError || partnerError);
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Supabase Tables</h1>
        <p>
          Error loading data:{" "}
          {(addressError || orgError || partnerError)?.message}
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Supabase Tables</h1>

      <h2>Test_Address_Map</h2>
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
          {addressData?.map((row) => (
            <tr key={row.id}>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{row.id}</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{row.Address}</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{row.Path_ID}</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{row.Names}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: "2rem" }}>Test_Organizaitons</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Org ID</th>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Address</th>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Organization Name</th>
          </tr>
        </thead>
        <tbody>
          {orgData?.map((row) => (
            <tr key={row.org_id}>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{row.org_id}</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{row.address}</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{row.organization_name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: "2rem" }}>Test_Partners</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>ID</th>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Organization 1</th>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Organization 2</th>
          </tr>
        </thead>
        <tbody>
          {partnerData?.map((row) => (
            <tr key={row.id}>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{row.id}</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{row.organization_1}</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{row.organization_2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
