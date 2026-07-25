export default function Login() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fafb' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '8px', color: '#15803d' }}>Tajer AI</h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '32px' }}>Sign in to your store</p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px' }}>Email</label>
            <input type="email" placeholder="you@store.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px' }}>Password</label>
            <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', boxSizing: 'border-box' }} />
          </div>
          <button type="button" style={{ background: '#15803d', color: 'white', padding: '14px', borderRadius: '8px', border: 'none', fontSize: '16px', cursor: 'pointer', marginTop: '8px' }}>
            Sign In
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#666' }}>
          No account? <a href="/register" style={{ color: '#15803d' }}>Create store</a>
        </p>
        <p style={{ textAlign: 'center', marginTop: '12px' }}>
          <a href="/dashboard" style={{ color: '#15803d', fontSize: '14px' }}>Continue as Demo →</a>
        </p>
      </div>
    </div>
  );
}