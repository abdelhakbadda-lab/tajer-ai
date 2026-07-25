export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', margin: 0 }}>
      <header style={{ background: '#15803d', color: 'white', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Tajer AI</h1>
        <nav style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a>
          <a href="/pricing" style={{ color: 'white', textDecoration: 'none' }}>Pricing</a>
          <a href="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</a>
        </nav>
      </header>

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '42px', marginBottom: '16px' }}>Your AI Sales Agent</h2>
        <p style={{ fontSize: '20px', color: '#555', marginBottom: '12px' }}>
          Transform WhatsApp conversations into sales for Saudi merchants
        </p>
        <p style={{ fontSize: '20px', color: '#555', marginBottom: '40px', direction: 'rtl' }}>
          حوّل محادثات واتساب إلى مبيعات للتجار السعوديين
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/register" style={{ background: '#15803d', color: 'white', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontSize: '18px' }}>
            Start Free Trial
          </a>
          <a href="/dashboard" style={{ background: '#f0fdf4', color: '#15803d', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontSize: '18px', border: '1px solid #15803d' }}>
            View Demo
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '60px', textAlign: 'left' }}>
          <div style={{ background: '#f9fafb', padding: '24px', borderRadius: '12px' }}>
            <h3>WhatsApp AI Agent</h3>
            <p style={{ color: '#555' }}>Responds in Arabic & English using your real catalog. Never invents prices or stock.</p>
          </div>
          <div style={{ background: '#f9fafb', padding: '24px', borderRadius: '12px' }}>
            <h3>Order Creation</h3>
            <p style={{ color: '#555' }}>Collects customer data and creates orders with human approval when needed.</p>
          </div>
          <div style={{ background: '#f9fafb', padding: '24px', borderRadius: '12px' }}>
            <h3>Salla / Zid Ready</h3>
            <p style={{ color: '#555' }}>Architecture prepared for Saudi e-commerce platforms and local payments.</p>
          </div>
        </div>

        <div style={{ marginTop: '60px', display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', fontSize: '14px' }}>
          <a href="/catalog" style={{ color: '#15803d' }}>Catalog</a>
          <a href="/conversations" style={{ color: '#15803d' }}>Conversations</a>
          <a href="/orders" style={{ color: '#15803d' }}>Orders</a>
          <a href="/settings" style={{ color: '#15803d' }}>AI Settings</a>
          <a href="/team" style={{ color: '#15803d' }}>Team</a>
          <a href="/integrations" style={{ color: '#15803d' }}>Integrations</a>
          <a href="/privacy" style={{ color: '#15803d' }}>Privacy</a>
        </div>
      </main>
    </div>
  );
}