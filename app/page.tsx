export default function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Tajer AI</h1>
      <p style={{ fontSize: '20px', color: '#555', marginBottom: '32px' }}>
        Your AI Sales Agent for Saudi Merchants
      </p>
      <a
        href="/dashboard"
        style={{
          background: '#15803d',
          color: 'white',
          padding: '14px 28px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '18px',
        }}
      >
        Open Dashboard Demo
      </a>
    </div>
  );
}