interface RateLimitEntry {
    attempts: number;
    lastAttempt: number;
    blockedUntil: number;
  }
  
  class RateLimiter {
    private attempts: Map<string, RateLimitEntry> = new Map();
    private readonly maxAttempts = 5;
    private readonly initialBlockDuration = 5 * 60 * 1000; // 5 minutes
  
    public checkRateLimit(identifier: string): { allowed: boolean; waitTime: number } {
      const now = Date.now();
      const entry = this.attempts.get(identifier) || { attempts: 0, lastAttempt: 0, blockedUntil: 0 };
  
      // Check if currently blocked
      if (entry.blockedUntil > now) {
        const waitTime = entry.blockedUntil - now;
        return { allowed: false, waitTime };
      }
  
      // Reset attempts if enough time has passed
      if (now - entry.lastAttempt > 60 * 60 * 1000) { // 1 hour
        entry.attempts = 0;
      }
  
      // Check if max attempts reached
      if (entry.attempts >= this.maxAttempts) {
        // Calculate block duration with exponential backoff
        const blockDuration = this.initialBlockDuration * Math.pow(2, entry.attempts - this.maxAttempts);
        entry.blockedUntil = now + blockDuration;
        this.attempts.set(identifier, entry);
        return { allowed: false, waitTime: blockDuration };
      }
  
      // Update attempts
      entry.attempts++;
      entry.lastAttempt = now;
      this.attempts.set(identifier, entry);
  
      return { allowed: true, waitTime: 0 };
    }
  
    public recordSuccess(identifier: string): void {
      this.attempts.delete(identifier);
    }
  }
  
  export const rateLimiter = new RateLimiter();