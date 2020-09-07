import router from 'next/router'

export default function checkAuthCredentials() {
  if (!localStorage.getItem('__J2G__')) router.push('/login')
}
