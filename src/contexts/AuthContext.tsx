import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Provider } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { validateEmail, sanitizeEmail } from '../utils/validation';
import { config } from '../config/environment';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signInWithProvider: (provider: Provider) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [lastLoginAttempt, setLastLoginAttempt] = useState(0);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkRateLimit = () => {
    const now = Date.now();
    if (loginAttempts >= config.auth.rateLimit.maxAttempts && 
        now - lastLoginAttempt < config.auth.rateLimit.windowMs) {
      throw new Error('Too many login attempts. Please try again later.');
    }
    if (now - lastLoginAttempt > config.auth.rateLimit.windowMs) {
      setLoginAttempts(0);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      checkRateLimit();
      setLoginAttempts(prev => prev + 1);
      setLastLoginAttempt(Date.now());

      const sanitizedEmail = sanitizeEmail(email);
      if (!validateEmail(sanitizedEmail)) {
        throw new Error('Please enter a valid email address');
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email: sanitizedEmail,
        password,
      });

      if (error) throw error;
      if (!data.user) throw new Error('No user data returned');

      setLoginAttempts(0);
    } catch (error: any) {
      console.error('Sign in error:', error);
      throw error;
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const sanitizedEmail = sanitizeEmail(email);
      if (!validateEmail(sanitizedEmail)) {
        throw new Error('Please enter a valid email address');
      }

      const { data, error } = await supabase.auth.signUp({
        email: sanitizedEmail,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            email: sanitizedEmail,
          }
        }
      });

      if (error) {
        if (error.message.includes('already registered')) {
          throw new Error('An account with this email already exists');
        }
        throw error;
      }

      if (!data.user) throw new Error('No user data returned');

    } catch (error: any) {
      console.error('Sign up error:', error);
      throw error;
    }
  };

  const signInWithProvider = async (provider: Provider) => {
    try {
      checkRateLimit();
      setLoginAttempts(prev => prev + 1);
      setLastLoginAttempt(Date.now());

      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });
      
      if (error) throw error;
    } catch (error: any) {
      console.error('OAuth error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error: any) {
      console.error('Sign out error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signInWithProvider, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}