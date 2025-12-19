// In-memory rate-limiting (replace with Redis for production)
const submissions: Record<string, number[]> = {};
const MAX_SUBMISSIONS = 3; // max 3 submissions
const TIME_WINDOW = 1000 * 60 * 10; // 10 minutes

export default function checkRateLimit(ip: string) {
  const now = Date.now();
  submissions[ip] = submissions[ip] || [];

  // Remove old timestamps
  submissions[ip] = submissions[ip].filter((ts) => now - ts < TIME_WINDOW);

  if (submissions[ip].length >= MAX_SUBMISSIONS) return false;

  submissions[ip].push(now);
  return true;
}