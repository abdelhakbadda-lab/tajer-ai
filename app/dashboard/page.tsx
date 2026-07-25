export default function Dashboard() {
  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '24px' }}>Dashboard Tajer AI</h1>
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
      <div style={{ marginTop: '40px' }}>
        <a href="/" style={{ color: '#15803d' }}>← Back to Home</a>
      </div>
    </div>
  );
}