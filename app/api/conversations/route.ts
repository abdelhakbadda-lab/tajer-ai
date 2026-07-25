import { NextResponse } from 'next/server';

const conversations = [
  {
    id: 1,
    customer: '+966 50 123 4567',
    customerName: 'Noura A.',
    lastMessage: 'هل عندكم عطر عود؟',
    status: 'AI Handling',
    time: '2 min ago',
    unread: true,
  },
  {
    id: 2,
    customer: '+966 55 987 6543',
    customerName: 'Fatima K.',
    lastMessage: 'I want the black abaya size L',
    status: 'Waiting Approval',
    time: '8 min ago',
    unread: true,
  },
  {
    id: 3,
    customer: '+966 54 111 2222',
    customerName: 'Mohammed S.',
    lastMessage: 'When will my order arrive?',
    status: 'Transferred',
    time: '25 min ago',
    unread: false,
  },
  {
    id: 4,
    customer: '+966 56 444 3333',
    customerName: 'Layla H.',
    lastMessage: 'Do you ship to Jeddah?',
    status: 'AI Handling',
    time: '1 hour ago',
    unread: false,
  },
];

export async function GET() {
  return NextResponse.json({ conversations });
}