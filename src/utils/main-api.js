import { REACT_APP_API_URL as BASE_URL } from './constants';

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  static _onError(res) {
    return res.json().then((data) => {
      if (res.ok) {
        return Promise.resolve(data);
      }
      return Promise.reject(data);
    });
  }

  getNews() {
    return fetch(`${this._baseUrl}/news`, {
      headers: this._headers,
      credentials: 'include',
    }).then(this.constructor._onError);
  }

  editProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
      credentials: 'include',
    }).then(this.constructor._onError);
  }

  saveCard(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
      credentials: 'include',
    }).then(this.constructor._onError);
  }

  deleteCard(data) {
    return fetch(`${this._baseUrl}/movies/${data.id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    }).then(this.constructor._onError);
  }
}

export default new Api({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});