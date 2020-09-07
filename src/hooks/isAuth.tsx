export default function isAuth(): boolean {
  return !!localStorage.getItem('__J2G__')
}
