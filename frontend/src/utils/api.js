class Api {
  constructor(settings) {
    this._baseUrl = settings.baseUrl;
    this._headers = settings.headers;
  }
  getUserInfo() {
    return fetch(this._baseUrl + "/users/me", {
      headers: this._headers,
    }).then(res => this.getResError(res));
  }

  patchUserInfo(data) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(res => this.getResError(res));
  }

  patchAvatar(data) {
    return fetch(this._baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(res => this.getResError(res));
  }

  getCards() {
    return fetch(this._baseUrl + "/cards", {
      headers: this._headers,
    }).then(res => this.getResError(res));
  }

  newCard(data) {
    return fetch(this._baseUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(res => this.getResError(res));
  }

  deleteCard(id) {
    return fetch(this._baseUrl + "/cards/" + id, {
      method: "DELETE",
      headers: this._headers,
    }).then(res => this.getResError(res));
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(this._baseUrl + "/cards/" + id + "/likes", {
      method: isLiked?  "DELETE" : "PUT" ,
      headers: this._headers,
    }).then(res => this.getResError(res));
  }

  getResError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-61",
  headers: {
    authorization: "1fc4f262-e0cf-44e9-9bbd-12c0480609d0",
    "Content-Type": "application/json",
  },
});

export default api;
