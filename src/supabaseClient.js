import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jjwmnainfjnulnnhfprz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqd21uYWluZmpudWxubmhmcHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyOTkyNjksImV4cCI6MjA4OTg3NTI2OX0.GuG2uJpyE-AGj0cwRbH8iOS1_uFzSt8bv4yomNVgSwc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
