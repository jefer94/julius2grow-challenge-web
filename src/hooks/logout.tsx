import router from 'next/router'

export default function logout(): void {
  localStorage.setItem('__J2G__', null)
  router.push('/login')
}
