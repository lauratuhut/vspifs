
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://knkaclnspzxmhmnnnsxz.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtua2FjbG5zcHp4bWhtbm5uc3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI0MDQwMDAsImV4cCI6MTk3Nzk4MDAwMH0.fOmwZH45R1u_QkrAgwPzK60sFNVoiDEqZ_z_3c-7Rmw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;