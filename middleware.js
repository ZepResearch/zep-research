import { NextResponse } from 'next/server';
import { createRateLimiter } from 'next-rate-limit';

// Different rate limiters for different API endpoints with appropriate limits
const chatRateLimiter = createRateLimiter({
  interval: { value: 60, unit: 'second' },
  max: 10, // More restrictive for the chat API since it's more resource-intensive
  response: {
    headers: {
      'Retry-After': '60',
      'X-RateLimit-Limit': '10',
      'X-RateLimit-Remaining': '0',
    },
    status: 429,
    data: { error: 'Too many chat requests. Please try again later.' }
  }
});

const uploadRateLimiter = createRateLimiter({
  interval: { value: 60, unit: 'second' },
  max: 5, // Very restrictive for file uploads to prevent abuse
  response: {
    headers: {
      'Retry-After': '60',
      'X-RateLimit-Limit': '5',
      'X-RateLimit-Remaining': '0',
    },
    status: 429,
    data: { error: 'Too many file uploads. Please try again later.' }
  }
});

const oauthRateLimiter = createRateLimiter({
  interval: { value: 60, unit: 'second' },
  max: 15, // More generous for auth endpoints
  response: {
    headers: {
      'Retry-After': '60',
      'X-RateLimit-Limit': '15',
      'X-RateLimit-Remaining': '0',
    },
    status: 429,
    data: { error: 'Too many authentication attempts. Please try again later.' }
  }
});

// Map API paths to their corresponding rate limiters
const RATE_LIMITERS = {
  '/api/chat': chatRateLimiter,
  '/api/upload': uploadRateLimiter,
  '/api/oauth2-redirect': oauthRateLimiter
};

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  
  // Find the matching rate limiter for the current path
  let rateLimiter = null;
  for (const [prefix, limiter] of Object.entries(RATE_LIMITERS)) {
    if (path.startsWith(prefix)) {
      rateLimiter = limiter;
      break;
    }
  }
  
  // Apply rate limiting if we have a matching limiter
  if (rateLimiter) {
    // Get IP address with fallbacks
    const ip = request.ip || 
              request.headers.get('x-forwarded-for') || 
              request.headers.get('x-real-ip') ||
              '127.0.0.1';
    
    // Create a unique key based on IP and path
    const key = `${ip}:${path}`;
    
    // Check if request exceeds rate limit
    const result = await rateLimiter.check(key);
    
    if (!result.success) {
      // Return rate limit exceeded response
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { 
          status: 429,
          headers: {
            'Retry-After': '60',
            'X-RateLimit-Limit': result.limit.toString(),
            'X-RateLimit-Remaining': '0',
          }
        }
      );
    }
  }
  
  // Continue to the route handler if rate limit not exceeded
  return NextResponse.next();
}

// Configure which routes this middleware should apply to
export const config = {
  matcher: [
    '/api/chat/:path*',
    '/api/upload/:path*',
    '/api/oauth2-redirect/:path*'
  ],
};