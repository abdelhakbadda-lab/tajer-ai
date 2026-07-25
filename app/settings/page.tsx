export default function Settings() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ background: '#15803d', color: 'white', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Tajer AI</h1>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a>
          <a href="/catalog" style={{ color: 'white', textDecoration: 'none' }}>Catalog</a>
          <a href="/conversations" style={{ color: 'white', textDecoration: 'none' }}>Conversations</a>
        </nav>
      </header>

      <main style={{ maxWidth: '700px', margin: '0 auto', padding: '40px 24px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '32px' }}>AI Settings</h2>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '16px' }}>Automation Mode</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Suggest only', 'Answer safe questions automatically', 'Create order but require approval', 'Full automation (within limits)'].map((mode, i) => (
              <label key={mode} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px', cursor: 'pointer' }}>
                <input type="radio" name="mode" defaultChecked={i === 2} />
                {mode}
              </label>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '16px' }}>Store Rules</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '6px' }}>Shipping Policy</label>
              <textarea defaultValue="Free shipping over 200 SAR. Delivery 1-3 days in Riyadh." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', minHeight: '80px', boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '6px' }}>Payment Methods</label>
              <input defaultValue="Mada, Apple Pay, Bank Transfer, Cash on Delivery" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '6px' }}>Tone of Voice</label>
              <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}>
                <option>Professional & Friendly</option>
                <option>Formal Arabic</option>
                <option>Casual</option>
              </select>
            </div>
          </div>
        </section>

        <button style={{ background: '#15803d', color: 'white', padding: '14px 28px', borderRadius: '8px', border: 'none', fontSize: '16px', cursor: 'pointer' }}>
          Save Settings
        </button>
      </main>
    </div>
  );
}