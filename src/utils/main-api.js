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
    }).then(this.constructor._onError);
  }

  saveNews(data, formData) {
    return fetch(`${this._baseUrl}/news`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
      credentials: 'include',
    })
      .then(this.constructor._onError)
      .then(({ id }) => fetch(`${this._baseUrl}/news/${id}/image`, {
        method: 'PATCH',
        body: formData,
        credentials: 'include',
      }))
      .then(this.constructor._onError);
  }

  editNews(data, formData, isFile) {
    return fetch(`${this._baseUrl}/news/${data.id}`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
      credentials: 'include',
    })
      .then(this.constructor._onError)
      .then((res) => {
        if (isFile) {
          return fetch(`${this._baseUrl}/news/${res.id}/image`, {
            method: 'PATCH',
            body: formData,
            credentials: 'include',
          }).then(this.constructor._onError);
        }
        return res;
      });
  }

  deleteNews(id) {
    return fetch(`${this._baseUrl}/news/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    }).then(this.constructor._onError);
  }

  getSpecs() {
    return fetch(`${this._baseUrl}/specialists`, {
      headers: this._headers,
    }).then(this.constructor._onError);
  }

  saveSpecs(data, formData) {
    return fetch(`${this._baseUrl}/specialists`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
      credentials: 'include',
    })
      .then(this.constructor._onError)
      .then(({ id }) => fetch(`${this._baseUrl}/specialists/${id}/image`, {
        method: 'PATCH',
        body: formData,
        credentials: 'include',
      }))
      .then(this.constructor._onError);
  }

  editSpec(data, formData, isFile) {
    return fetch(`${this._baseUrl}/specialists/${data.id}`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
      credentials: 'include',
    })
      .then(this.constructor._onError)
      .then((res) => {
        if (isFile) {
          return fetch(`${this._baseUrl}/specialists/${res.id}/image`, {
            method: 'PATCH',
            body: formData,
            credentials: 'include',
          }).then(this.constructor._onError);
        }
        return res;
      });
  }

  deleteSpec(id) {
    return fetch(`${this._baseUrl}/specialists/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    }).then(this.constructor._onError);
  }

  sendCallbackQuery(data) {
    return fetch(`${this._baseUrl}/mail/callback`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
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
}

export default new Api({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
