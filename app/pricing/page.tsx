export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '149',
      features: ['50 conversations / month', '1 operator', '1 store', 'Basic analytics', 'Email support'],
    },
    {
      name: 'Growth',
      price: '399',
      features: ['500 conversations / month', '3 operators', '2 stores', 'Advanced analytics', 'Priority support', 'Salla / Zid integration'],
      popular: true,
    },
    {
      name: 'Pro',
      price: '899',
      features: ['Unlimited conversations', '10 operators', '5 stores', 'Full analytics', 'Dedicated support', 'All integrations', 'Custom rules'],
    },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ background: '#15803d', color: 'white', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Tajer AI</h1>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</a>
        </nav>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '12px' }}>Simple Pricing</h2>
        <p style={{ color: '#555', marginBottom: '48px' }}>أسعار بسيطة — Start with a free pilot</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                border: plan.popular ? '2px solid #15803d' : '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '32px',
                position: 'relative',
                background: plan.popular ? '#f0fdf4' : 'white',
              }}
            >
              {plan.popular && (
                <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#15803d', color: 'white', padding: '4px 16px', borderRadius: '20px', fontSize: '13px' }}>
                  Most Popular
                </span>
              )}
              <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{plan.name}</h3>
              <p style={{ fontSize: '40px', fontWeight: 'bold', margin: '0 0 4px' }}>
                {plan.price} <span style={{ fontSize: '18px', fontWeight: 'normal' }}>SAR</span>
              </p>
              <p style={{ color: '#666', marginBottom: '24px' }}>/ month</p>
              <ul style={{ textAlign: 'left', paddingLeft: '20px', marginBottom: '32px', color: '#444' }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ marginBottom: '8px' }}>{f}</li>
                ))}
              </ul>
              <a
                href="/register"
                style={{
                  display: 'block',
                  background: plan.popular ? '#15803d' : '#f0fdf4',
                  color: plan.popular ? 'white' : '#15803d',
                  padding: '14px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  border: plan.popular ? 'none' : '1px solid #15803d',
                }}
              >
                Start Free Trial
              </a>
            </div>
          ))}
        </div>

        <p style={{ marginTop: '48px', color: '#666' }}>
          Enterprise plan available — <a href="mailto:hello@tajer.ai" style={{ color: '#15803d' }}>Contact us</a>
        </p>
      </main>
    </div>
  );
}