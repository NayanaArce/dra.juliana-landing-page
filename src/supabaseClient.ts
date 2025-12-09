import { createClient } from "@supabase/supabase-js"

// Substitua pelas suas credenciais do Supabase
const supabaseUrl = "https://wzjnknhexxhdnsktcmqw.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6am5rbmhleHhoZG5za3RjbXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3MDg2NzUsImV4cCI6MjA4MDI4NDY3NX0.caSi3huKRSvzX8ADWFMSBpVY5QL0Hg07jRM5_JO6v8o"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
