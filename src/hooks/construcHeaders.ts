export default function construcHeaders(): Record<string, string> {
  const token = localStorage.getItem('__J2G__')
  if (!token) return {}
  return {
    authorization: `Bearer ${token}`
  }
}
