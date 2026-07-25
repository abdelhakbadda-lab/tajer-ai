import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'Oud Perfume Royal', nameAr: 'عطر عود رويال', price: 450, stock: 23, sku: 'OUD-001', category: 'Perfume' },
  { id: 2, name: 'Abaya Black Classic', nameAr: 'عباية سوداء كلاسيكية', price: 280, stock: 15, sku: 'ABY-002', category: 'Clothing' },
  { id: 3, name: 'Gold Necklace', nameAr: 'قلادة ذهبية', price: 1200, stock: 8, sku: 'JWL-003', category: 'Jewelry' },
  { id: 4, name: 'Rose Attar', nameAr: 'عطر الورد', price: 180, stock: 40, sku: 'ATT-004', category: 'Perfume' },
  { id: 5, name: 'Leather Handbag', nameAr: 'حقيبة جلدية', price: 350, stock: 12, sku: 'BAG-005', category: 'Accessories' },
  { id: 6, name: 'Saffron Oud Mix', nameAr: 'خلطة عود بالزعفران', price: 520, stock: 9, sku: 'OUD-006', category: 'Perfume' },
];

export async function GET() {
  return NextResponse.json({ products });
}