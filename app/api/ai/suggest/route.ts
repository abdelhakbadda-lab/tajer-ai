import { NextRequest, NextResponse } from 'next/server';

// Simple rule-based AI mock (safe, no hallucination of prices)
// In production this would call an LLM with RAG over the store catalog

const catalog = [
  { keywords: ['oud', 'عود', 'perfume', 'عطر'], name: 'Oud Perfume Royal', nameAr: 'عطر عود رويال', price: 450, stock: 23 },
  { keywords: ['abaya', 'عباية', 'black'], name: 'Abaya Black Classic', nameAr: 'عباية سوداء كلاسيكية', price: 280, stock: 15 },
  { keywords: ['necklace', 'gold', 'قلادة', 'ذهب'], name: 'Gold Necklace', nameAr: 'قلادة ذهبية', price: 1200, stock: 8 },
  { keywords: ['rose', 'ورد', 'attar'], name: 'Rose Attar', nameAr: 'عطر الورد', price: 180, stock: 40 },
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const message = (body.message || '').toLowerCase();

    // Find matching products
    const matches = catalog.filter((p) =>
      p.keywords.some((k) => message.includes(k.toLowerCase()))
    );

    if (matches.length === 0) {
      return NextResponse.json({
        reply: 'عذراً، لم أجد منتجاً مطابقاً. هل يمكنك توضيح ما تبحث عنه؟ / Sorry, I could not find a matching product. Can you clarify?',
        confidence: 'low',
        action: 'ask_clarification',
      });
    }

    const product = matches[0];
    const replyAr = `نعم، لدينا ${product.nameAr}.\nالسعر: ${product.price} ريال\nالمتوفر: ${product.stock} قطعة\n\nهل تريدين أن أجهزه لك؟`;
    const replyEn = `Yes, we have ${product.name}.\nPrice: ${product.price} SAR\nStock: ${product.stock}\n\nWould you like me to prepare it for you?`;

    return NextResponse.json({
      reply: replyAr + '\n\n---\n' + replyEn,
      product,
      confidence: 'high',
      action: 'suggest_order',
    });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}