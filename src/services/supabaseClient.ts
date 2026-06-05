import { createClient } from "@supabase/supabase-js";
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
} from "./config";

console.log("URL =>", SUPABASE_URL);
console.log("KEY =>", SUPABASE_ANON_KEY);

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);