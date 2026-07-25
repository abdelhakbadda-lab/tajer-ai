export default function Integrations() {
  const integrations = [
    { name: 'WhatsApp Business', status: 'Ready (mock)', description: 'Cloud API — architecture prepared' },
    { name: 'Salla', status: 'Ready (mock)', description: 'Catalog & orders sync' },
    { name: 'Zid', status: 'Ready (mock)', description: 'Catalog & orders sync' },
    { name: 'Shopify', status: 'Ready (mock)', description: 'Catalog import' },
    { name: 'Payment Gateway', status: 'Planned', description: 'Mada / local gateways' },
    { name: 'ZATCA E-Invoicing', status: 'Planned', description: 'Via certified provider' },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ background: '#15803d', color: 'white', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Tajer AI</h1>
        <nav style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a>
          <a href="/settings" style={{ color: 'white', textDecoration: 'none' }}>Settings</a>
        </nav>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Integrations</h2>
        <p style={{ color: '#555', marginBottom: '32px' }}>التكاملات — Connect your tools</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {integrations.map((i) => (
            <div key={i.name} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <strong>{i.name}</strong>
                <p style={{ margin: '4px 0 0', color: '#555' }}>{i.description}</p>
              </div>
              <span style={{
                fontSize: '13px',
                padding: '4px 12px',
                borderRadius: '20px',
                background: i.status.includes('Ready') ? '#dcfce7' : '#f3f4f6',
                color: i.status.includes('Ready') ? '#15803d' : '#6b7280',
              }}>
                {i.status}
              </span>
            </div>
          ))}
        </div>

        <p style={{ marginTop: '32px', fontSize: '14px', color: '#666' }}>
          Real credentials required for live connections. Sandbox / mock mode is active.
        </p>
      </main>
    </div>
  );
}