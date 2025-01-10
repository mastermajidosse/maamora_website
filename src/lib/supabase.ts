import { createClient } from '@supabase/supabase-js';
import { rateLimit } from './rateLimit';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Create a custom fetch handler with rate limiting
const customFetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  // Apply rate limiting
  await rateLimit();
  
  // Sanitize request data if it's a POST/PUT/PATCH request with a body
  if (init?.body && ['POST', 'PUT', 'PATCH'].includes(init.method || '')) {
    try {
      const data = JSON.parse(init.body.toString());
      const sanitizedData = sanitizeInput(data);
      init.body = JSON.stringify(sanitizedData);
    } catch (e) {
      console.error('Error sanitizing request data:', e);
    }
  }

  return fetch(input, init);
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  global: {
    fetch: customFetch
  }
});

// Input sanitization function
function sanitizeInput(data: any): any {
  if (typeof data !== 'object' || data === null) {
    return sanitizeValue(data);
  }

  if (Array.isArray(data)) {
    return data.map(item => sanitizeInput(item));
  }

  const sanitized: Record<string, any> = {};
  for (const [key, value] of Object.entries(data)) {
    sanitized[key] = sanitizeInput(value);
  }
  return sanitized;
}

// Sanitize individual values
function sanitizeValue(value: any): any {
  if (typeof value === 'string') {
    // Remove potentially dangerous HTML/script tags
    value = value.replace(/<[^>]*>/g, '');
    // Prevent SQL injection
    value = value.replace(/['";\\]/g, '');
    // Encode special characters
    value = encodeURIComponent(value);
  }
  return value;
}