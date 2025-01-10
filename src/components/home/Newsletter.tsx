import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    try {
      setStatus('loading');

      const { error } = await supabase
        .from('subscribers')
        .insert([{ email }]);

      if (error) throw error;

      setStatus('success');
      setEmail('');
      
      setTimeout(() => {
        setStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Error subscribing:', error);
      setStatus('error');
      
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };

  return (
    <section className="pb-24 pt-24 bg-[#232f3e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-white/80 mb-8">
            Stay updated with our latest products and exclusive offers
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-white text-[#fb7701] px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              Subscribe
            </button>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-white bg-green-500/20 py-2 px-4 rounded-lg inline-block">
              Thank you for subscribing!
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-white bg-red-500/20 py-2 px-4 rounded-lg inline-block">
              Failed to subscribe. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}