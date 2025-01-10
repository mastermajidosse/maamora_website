// Simple rate limiting implementation
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 100; // Maximum requests per window

interface RequestLog {
  timestamp: number;
  count: number;
}

const requestLogs: Map<string, RequestLog> = new Map();

export async function rateLimit(key: string = 'global'): Promise<void> {
  const now = Date.now();
  const log = requestLogs.get(key) || { timestamp: now, count: 0 };

  // Reset counter if window has passed
  if (now - log.timestamp > RATE_LIMIT_WINDOW) {
    log.timestamp = now;
    log.count = 0;
  }

  // Check if rate limit is exceeded
  if (log.count >= MAX_REQUESTS) {
    throw new Error('Rate limit exceeded. Please try again later.');
  }

  // Increment counter
  log.count++;
  requestLogs.set(key, log);
}