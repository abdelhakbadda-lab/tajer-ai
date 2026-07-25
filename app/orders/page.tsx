export default function Orders() {
  const orders = [
    { id: 'ORD-1042', customer: 'Sara Al-Harbi', total: 450, status: 'Pending Payment', items: 1, date: 'Today' },
    { id: 'ORD-1041', customer: 'Mohammed K.', total: 280, status: 'Confirmed', items: 1, date: 'Today' },
    { id: 'ORD-1039', customer: 'Fatima R.', total: 1380, status: 'Shipped', items: 2, date: 'Yesterday' },
    { id: 'ORD-1035', customer: 'Ahmed S.', total: 180, status: 'Delivered', items: 1, date: '2 days ago' },
  ];

  const statusColor = (s: string) => {
    if (s === 'Pending Payment') return { bg: '#fef3c7', color: '#b45309' };
    if (s === 'Confirmed') return { bg: '#dbeafe', color: '#1d4ed8' };
    if (s === 'Shipped') return { bg: '#e0e7ff', color: '#4338ca' };
    return { bg: '#dcfce7', color: '#15803d' };
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ background: '#15803d', color: 'white', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Tajer AI</h1>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a>
          <a href="/catalog" style={{ color: 'white', textDecoration: 'none' }}>Catalog</a>
          <a href="/conversations" style={{ color: 'white', textDecoration: 'none' }}>Conversations</a>
        </nav>
      </header>

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 24px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Orders</h2>
        <p style={{ color: '#555', marginBottom: '32px' }}>الطلبات — Orders created by AI or team</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {orders.map((o) => {
            const sc = statusColor(o.status);
            return (
              <div key={o.id} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <strong>{o.id}</strong>
                  <p style={{ margin: '4px 0 0', color: '#555' }}>{o.customer} • {o.items} item(s)</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ margin: 0, fontWeight: 'bold' }}>{o.total} SAR</p>
                  <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#666' }}>{o.date}</p>
                </div>
                <span style={{ fontSize: '13px', padding: '4px 12px', borderRadius: '20px', background: sc.bg, color: sc.color }}>
                  {o.status}
                </span>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}