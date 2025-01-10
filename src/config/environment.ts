export const isDevelopment = import.meta.env.MODE === 'development';
export const isProduction = import.meta.env.MODE === 'production';

export const config = {
  auth: {
    rateLimit: {
      maxAttempts: isDevelopment ? 1000 : 5,
      windowMs: isDevelopment ? 60000 : 300000, // 1 min in dev, 5 mins in prod
    },
  },
  validation: {
    email: {
      // RFC 5322 compliant email regex
      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
  },
};