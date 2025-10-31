import { createClient } from '@supabase/supabase-js';

// Mock Supabase client for frontend-only operation
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mock.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'mock-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  published: boolean;
  created_at: string;
};
