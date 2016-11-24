export default class AjaxAdapter {
  static checkSession() {
    return fetch(`/api/checkSession`, {
      credentials: 'include'
    })
  }
}
