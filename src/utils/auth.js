import { REACT_APP_API_URL as BASE_URL } from './constants';

class Auth {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  static _onError(res) {
    return res.json()
      .then((data) => {
        if (res.ok) {
          return Promise.resolve(data);
        }
        return Promise.reject(data);
      });
  }

  signUp(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
      credentials: 'include',
    })
      .then(this.constructor._onError);
  }

  signIn(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, email }),
      credentials: 'include',
    })
      .then(this.constructor._onError);
  }

  checkAutorization() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(this.constructor._onError);
  }

  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(this.constructor._onError);
  }
}

export default new Auth({
  baseUrl: BASE_URL,
});
