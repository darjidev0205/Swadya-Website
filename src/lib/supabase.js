import { createClient } from '@supabase/supabase-js'

const supabaseUrl  = import.meta.env.VITE_SUPABASE_URL  || ''
const supabaseKey  = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Will be null if env vars are not set (app still works with local data)
export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null

// ─── Products ───────────────────────────────────────────────────────────────
export async function fetchProducts() {
  if (!supabase) return null
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('category', { ascending: true })
  if (error) { console.error('Supabase fetchProducts:', error); return null }
  return data
}

// ─── Inquiries ───────────────────────────────────────────────────────────────
export async function submitInquiry(inquiry) {
  if (!supabase) {
    console.info('Supabase not configured – inquiry logged locally:', inquiry)
    return { success: true, offline: true }
  }
  const { error } = await supabase.from('inquiries').insert([inquiry])
  if (error) { console.error('Supabase submitInquiry:', error); return { success: false, error } }
  return { success: true }
}

// ─── Page Views (analytics) ──────────────────────────────────────────────────
export async function logPageView(page) {
  if (!supabase) return
  await supabase.from('page_views').insert([{ page, viewed_at: new Date().toISOString() }])
}
