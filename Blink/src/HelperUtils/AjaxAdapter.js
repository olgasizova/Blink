export default class AjaxAdapter {
  static checkSession() {
    return fetch(`/api/checkSession`, {
      credentials: 'include'
    })
  }
  static getUserData() {
    return fetch('/api/getUserData', {
      credentials: 'include'
    })
    .then((r) => r.json())
  }
}
