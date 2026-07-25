export default function Conversations() {
  const chats = [
    {
      id: 1,
      customer: '+966 50 123 4567',
      lastMessage: 'هل عندكم عطر عود؟',
      status: 'AI Handling',
      time: '2 min ago',
    },
    {
      id: 2,
      customer: '+966 55 987 6543',
      lastMessage: 'I want the black abaya size L',
      status: 'Waiting Approval',
      time: '8 min ago',
    },
    {
      id: 3,
      customer: '+966 54 111 2222',
      lastMessage: 'When will my order arrive?',
      status: 'Transferred',
      time: '25 min ago',
    },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ background: '#15803d', color: 'white', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Tajer AI</h1>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a>
          <a href="/catalog" style={{ color: 'white', textDecoration: 'none' }}>Catalog</a>
        </nav>
      </header>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Conversations</h2>
        <p style={{ color: '#555', marginBottom: '32px' }}>المحادثات — WhatsApp inbox (demo)</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {chats.map((c) => (
            <div key={c.id} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <strong>{c.customer}</strong>
                <span style={{ fontSize: '14px', color: '#666' }}>{c.time}</span>
              </div>
              <p style={{ margin: '0 0 8px', direction: 'rtl' }}>{c.lastMessage}</p>
              <span
                style={{
                  fontSize: '13px',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  background:
                    c.status === 'AI Handling'
                      ? '#dcfce7'
                      : c.status === 'Waiting Approval'
                      ? '#fef3c7'
                      : '#fee2e2',
                  color:
                    c.status === 'AI Handling'
                      ? '#15803d'
                      : c.status === 'Waiting Approval'
                      ? '#b45309'
                      : '#b91c1c',
                }}
              >
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}