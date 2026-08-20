const SUPABASE_URL = "https://exfrvhnizrvrkkmqizrs.supabase.co";
const SUPABASE_KEY = "sb_publishable_jPA2brk-iAQ7fsdJZZh13Q_Mf0dUfj8";

async function supabaseRequest(path, options = {}) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=representation",
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Supabase error: ${response.status}`);
  }

  if (response.status === 204) return null;

  return response.json();
}
