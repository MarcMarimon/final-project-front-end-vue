const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlbWtxaGFoaG5kemJjbGttcHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEzODIxMzAsImV4cCI6MjAyNjk1ODEzMH0.rIfmiGE6qVdnZLaiBRljAEgpYCTQWmNhcUtfX3lIuqw';
const PROJECT_URL = 'https://vemkqhahhndzbclkmpwc.supabase.co'

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(PROJECT_URL, API_KEY)