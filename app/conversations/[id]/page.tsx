export default function ConversationDetail() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ background: '#15803d', color: 'white', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <a href="/conversations" style={{ color: 'white', textDecoration: 'none', marginRight: '16px' }}>← Back</a>
          <strong>+966 50 123 4567</strong>
        </div>
        <span style={{ background: '#dcfce7', color: '#15803d', padding: '4px 12px', borderRadius: '20px', fontSize: '13px' }}>
          AI Handling
        </span>
      </header>

      <div style={{ flex: 1, padding: '24px', overflowY: 'auto', background: '#f9fafb' }}>
        {/* Customer message */}
        <div style={{ marginBottom: '16px', maxWidth: '70%' }}>
          <div style={{ background: 'white', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
            <p style={{ margin: 0, direction: 'rtl' }}>السلام عليكم، هل عندكم عطر عود رويال؟</p>
          </div>
          <small style={{ color: '#999' }}>Customer • 10:42</small>
        </div>

        {/* AI response */}
        <div style={{ marginBottom: '16px', maxWidth: '70%', marginLeft: 'auto' }}>
          <div style={{ background: '#dcfce7', padding: '12px 16px', borderRadius: '12px' }}>
            <p style={{ margin: 0, direction: 'rtl' }}>
              وعليكم السلام! نعم، لدينا عطر عود رويال.
              <br />السعر: 450 ريال
              <br />المتوفر: 23 قطعة
              <br /><br />هل تريدين أن أجهزه لك؟
            </p>
          </div>
          <small style={{ color: '#999', display: 'block', textAlign: 'right' }}>Tajer AI • 10:42</small>
        </div>

        {/* Customer */}
        <div style={{ marginBottom: '16px', maxWidth: '70%' }}>
          <div style={{ background: 'white', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
            <p style={{ margin: 0, direction: 'rtl' }}>نعم، أريد واحد. كيف أدفع؟</p>
          </div>
          <small style={{ color: '#999' }}>Customer • 10:44</small>
        </div>

        {/* AI */}
        <div style={{ marginBottom: '16px', maxWidth: '70%', marginLeft: 'auto' }}>
          <div style={{ background: '#dcfce7', padding: '12px 16px', borderRadius: '12px' }}>
            <p style={{ margin: 0, direction: 'rtl' }}>
              ممتاز! يمكن الدفع عبر:
              <br />• مدى
              <br />• Apple Pay
              <br />• تحويل بنكي
              <br />• الدفع عند الاستلام
              <br /><br />ما اسمك الكامل ومدينة التوصيل؟
            </p>
          </div>
          <small style={{ color: '#999', display: 'block', textAlign: 'right' }}>Tajer AI • 10:44</small>
        </div>
      </div>

      {/* Action bar */}
      <div style={{ padding: '16px 24px', borderTop: '1px solid #e5e7eb', background: 'white', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <button style={{ background: '#15803d', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>
          Approve & Create Order
        </button>
        <button style={{ background: '#fef3c7', color: '#b45309', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>
          Take Over
        </button>
        <button style={{ background: '#f3f4f6', color: '#374151', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>
          Suggest Reply
        </button>
      </div>
    </div>
  );
}