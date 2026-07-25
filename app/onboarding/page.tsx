export default function Onboarding() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', background: '#f9fafb' }}>
      <header style={{ background: '#15803d', color: 'white', padding: '16px 24px' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Tajer AI — Setup</h1>
      </header>

      <main style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Welcome!</h2>
        <p style={{ color: '#555', marginBottom: '40px' }}>Let's set up your AI sales agent in 3 steps</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #15803d' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ background: '#15803d', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</span>
              <h3 style={{ margin: 0 }}>Import your catalog</h3>
            </div>
            <p style={{ color: '#555', margin: '0 0 16px' }}>Upload a CSV or connect Salla / Zid / Shopify</p>
            <button style={{ background: '#15803d', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>
              Upload CSV
            </button>
          </div>

          <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ background: '#d1d5db', color: '#374151', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</span>
              <h3 style={{ margin: 0 }}>Connect WhatsApp</h3>
            </div>
            <p style={{ color: '#555', margin: 0 }}>Link your WhatsApp Business number (Cloud API)</p>
          </div>

          <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ background: '#d1d5db', color: '#374151', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</span>
              <h3 style={{ margin: 0 }}>Set AI rules</h3>
            </div>
            <p style={{ color: '#555', margin: 0 }}>Choose automation level, shipping & payment rules</p>
          </div>
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <a href="/dashboard" style={{ background: '#15803d', color: 'white', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px' }}>
            Skip for now → Go to Dashboard
          </a>
        </div>
      </main>
    </div>
  );
}