import { createClient } from "@supabase/supabase-js";

const apiUrl = "https://lncjmaexlzkgjmcrfjdi.supabase.co";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuY2ptYWV4bHprZ2ptY3JmamRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMDg0NTMsImV4cCI6MjA1ODU4NDQ1M30.C8V3tdyLvnvnBH3sQlESXJvWnXF1WhJh1vu_tW6e-jw";

export const supabase = createClient(apiUrl , apiKey);








