export default function Dashboard() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ background: '#15803d', color: 'white', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Tajer AI</h1>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="/catalog" style={{ color: 'white', textDecoration: 'none' }}>Catalog</a>
          <a href="/conversations" style={{ color: 'white', textDecoration: 'none' }}>Conversations</a>
        </nav>
      </header>

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 24px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Dashboard</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
          }}
        >
          <div style={{ background: '#f0fdf4', padding: '24px', borderRadius: '12px' }}>
            <h3 style={{ margin: 0, color: '#555' }}>Conversations</h3>
            <p style={{ fontSize: '36px', fontWeight: 'bold', margin: '8px 0 0' }}>47</p>
          </div>
          <div style={{ background: '#f0fdf4', padding: '24px', borderRadius: '12px' }}>
            <h3 style={{ margin: 0, color: '#555' }}>AI Orders</h3>
            <p style={{ fontSize: '36px', fontWeight: 'bold', margin: '8px 0 0' }}>12</p>
          </div>
          <div style={{ background: '#f0fdf4', padding: '24px', borderRadius: '12px' }}>
            <h3 style={{ margin: 0, color: '#555' }}>Conversion</h3>
            <p style={{ fontSize: '36px', fontWeight: 'bold', margin: '8px 0 0', color: '#15803d' }}>68%</p>
          </div>
          <div style={{ background: '#f0fdf4', padding: '24px', borderRadius: '12px' }}>
            <h3 style={{ margin: 0, color: '#555' }}>Avg Response</h3>
            <p style={{ fontSize: '36px', fontWeight: 'bold', margin: '8px 0 0' }}>38s</p>
          </div>
        </div>
      </main>
    </div>
  );
}