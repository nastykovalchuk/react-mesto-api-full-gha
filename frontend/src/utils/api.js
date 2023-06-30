class Api {
  constructor(settings) {
    this._baseUrl = settings.baseUrl;
    this._headers = settings.headers;
  }
  getUserInfo() {
    return fetch(this._baseUrl + "/users/me", {
        headers: {
    "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json",
  },
    }).then(res => this.getResError(res));
  }

  patchUserInfo(data) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
        headers: {
    "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json",
  },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(res => this.getResError(res));
  }

  patchAvatar(data) {
    return fetch(this._baseUrl + "/users/me/avatar", {
      method: "PATCH",
        headers: {
    "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json",
  },
      body: JSON.stringify(data),
    }).then(res => this.getResError(res));
  }

  getCards() {
    return fetch(this._baseUrl + "/cards", {
        headers: {
    "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json",
  },
    }).then(res => this.getResError(res));
  }

  newCard(data) {
    return fetch(this._baseUrl + "/cards", {
      method: "POST",
        headers: {
    "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json",
  },
      body: JSON.stringify(data),
    }).then(res => this.getResError(res));
  }

  deleteCard(id) {
    return fetch(this._baseUrl + "/cards/" + id, {
      method: "DELETE",
        headers: {
    "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json",
  },
    }).then(res => this.getResError(res));
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(this._baseUrl + "/cards/" + id + "/likes", {
      method: isLiked?  "DELETE" : "PUT" ,
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
      },
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
  baseUrl: process.env.REACT_APP_API_URL || "http://localhost:2000",
});

export default api;
