import { NextResponse } from 'next/server';

const rateLimit = new Map();

const limit = 500; // Max requests
const windowMs = 60 * 1_000; // 1 minute

export function middleware(request) {
  const ip = 
    request.ip || 
    request.headers.get('x-forwarded-for') || 
    request.headers.get('x-real-ip') || 
    request.connection?.remoteAddress;

  if (!ip) {
    return NextResponse.json({ error: 'Unable to determine IP' }, { status: 400 });
  }

  const currentTime = Date.now();
  const userRequests = rateLimit.get(ip) || [];

  // Filter requests within the window
  const filteredRequests = userRequests.filter((timestamp) => currentTime - timestamp < windowMs);
  filteredRequests.push(currentTime);

  rateLimit.set(ip, filteredRequests);

  if (filteredRequests.length > limit) {
    return NextResponse.json({ error: 'Too many requests, please try again later.' }, { status: 429 });
  }

  return NextResponse.next();
}
