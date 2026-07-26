'use client';

import { useEffect, useState } from 'react';

type Product = {
  id: number;
  name: string;
  nameAr: string;
  price: number;
  stock: number;
  sku: string;
  category?: string;
};

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ background: '#15803d', color: 'white', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Tajer AI</h1>
        <nav style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a>
          <a href="/conversations" style={{ color: 'white', textDecoration: 'none' }}>Conversations</a>
          <a href="/orders" style={{ color: 'white', textDecoration: 'none' }}>Orders</a>
        </nav>
      </header>

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 24px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Product Catalog</h2>
        <p style={{ color: '#555', marginBottom: '32px' }}>كتالوج المنتجات — Loaded from API</p>

        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {products.map((p) => (
              <div key={p.id} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px' }}>
                <h3 style={{ margin: '0 0 4px' }}>{p.name}</h3>
                <p style={{ margin: '0 0 12px', direction: 'rtl', color: '#555' }}>{p.nameAr}</p>
                <p style={{ margin: '0 0 4px' }}><strong>{p.price} SAR</strong></p>
                <p style={{ margin: '0 0 4px', fontSize: '14px', color: '#666' }}>SKU: {p.sku}</p>
                <p style={{ margin: 0, fontSize: '14px', color: p.stock > 10 ? '#15803d' : '#b45309' }}>
                  Stock: {p.stock}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}