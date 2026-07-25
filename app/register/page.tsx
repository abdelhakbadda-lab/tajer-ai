export default function Register() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fafb' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', width: '100%', maxWidth: '420px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '8px', color: '#15803d' }}>Tajer AI</h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '32px' }}>Create your store</p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px' }}>Store Name</label>
            <input type="text" placeholder="My Perfume Store" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px' }}>Your Name</label>
            <input type="text" placeholder="Ahmed Al-Rashid" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px' }}>Email</label>
            <input type="email" placeholder="you@store.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px' }}>Password</label>
            <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', boxSizing: 'border-box' }} />
          </div>
          <button type="button" style={{ background: '#15803d', color: 'white', padding: '14px', borderRadius: '8px', border: 'none', fontSize: '16px', cursor: 'pointer', marginTop: '8px' }}>
            Create Store
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#666' }}>
          Already have an account? <a href="/login" style={{ color: '#15803d' }}>Sign in</a>
        </p>
      </div>
    </div>
  );
}