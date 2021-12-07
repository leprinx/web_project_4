class Api {
  constructor({ baseUrl, authToken }) {
    this._baseUrl = baseUrl;
    this._authToken = authToken;
  }
  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authToken,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Error ${res.status}`);
      });
  }
  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authToken,
      },
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
    });
  }
  updateUserId(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
    });
  }
  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
    });
  }
  addLike(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: "PUT",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
    });
  }
  removeLike(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
    });
  }
  removeCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
    });
  }
  changeProfilePic(newAvatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: newAvatar,
      }),
    });
  }
}

export default Api;
