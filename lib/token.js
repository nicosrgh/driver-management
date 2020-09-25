import nextCookie from 'next-cookies'
import cookie from 'js-cookie'

export function set({ token }) {
  return cookie.set('token', token)
}

export function get() {
  const token = cookie.get('token')
  return token
}

export function remove() {
  cookie.remove('token')
  window.localStorage.setItem('logout', Date.now())
}

const token = {
  set,
  get,
  remove,
}

export default token
