import router from 'next/router'

export default function setToken(token: string) {
  if (token) {
    localStorage.setItem('__J2G__', token)
    router.push('/')
  }
}
