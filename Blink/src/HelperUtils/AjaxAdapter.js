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
  static googleSearch(searchTerms) {
    const payload = { searchTerms }
    return fetch('/api/googleSearch', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then((r) => r.json())
  }

  static saveDOB(dobInput) {
    const payload = {...dobInput}
    return fetch ('/api/saveDOB', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(payload)
    })
  }
}
