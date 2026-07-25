export default function Team() {
  const members = [
    { name: 'Ahmed Al-Rashid', role: 'Owner', email: 'ahmed@store.com', status: 'Active' },
    { name: 'Sara Mohammed', role: 'Admin', email: 'sara@store.com', status: 'Active' },
    { name: 'Khalid Hassan', role: 'Operator', email: 'khalid@store.com', status: 'Active' },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ background: '#15803d', color: 'white', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Tajer AI</h1>
        <nav style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a>
          <a href="/conversations" style={{ color: 'white', textDecoration: 'none' }}>Conversations</a>
          <a href="/orders" style={{ color: 'white', textDecoration: 'none' }}>Orders</a>
          <a href="/settings" style={{ color: 'white', textDecoration: 'none' }}>Settings</a>
        </nav>
      </header>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h2 style={{ fontSize: '32px', margin: 0 }}>Team</h2>
            <p style={{ color: '#555', margin: '4px 0 0' }}>الفريق — Manage operators</p>
          </div>
          <button style={{ background: '#15803d', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>
            + Invite Member
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {members.map((m) => (
            <div key={m.email} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <strong>{m.name}</strong>
                <p style={{ margin: '4px 0 0', color: '#555' }}>{m.email}</p>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <span style={{ background: '#f3f4f6', padding: '4px 12px', borderRadius: '20px', fontSize: '13px' }}>{m.role}</span>
                <span style={{ color: '#15803d', fontSize: '14px' }}>{m.status}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}