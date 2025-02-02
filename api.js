// Замени на свой, чтобы получить независимый от других набор данных.
// "боевая" версия инстапро лежит в ключе prod
// const personalKey = "prod";
import { sanitizeHtml } from "./sanitizeHtml";
const personalKey = "vakulenko";
const baseHost = "https://webdev-hw-api.vercel.app";
const postsHost = `${baseHost}/api/v1/${personalKey}/instapro`;

export function getPosts({ token }) {
  return fetch(postsHost, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      if (response.status === 401) {
        throw new Error("Нет авторизации");
      }
      return response.json();
    })
    .then((data) => {
      return data.posts;
    });
}

export function getUserPosts({ id, token }) {
  return fetch( postsHost + "/user-posts/" + id, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw Error('Нет авторизации');
      }
    })
    .then((data) => {
      return data.posts;
    });
}

export function addPosts({ description, imageUrl, token }) {
  return fetch(postsHost, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: JSON.stringify({
      description: sanitizeHtml(description),
      imageUrl,
    }),
  }).then((response) => {
    if (response.status === 201) {
      return response.json();
    } else {
      alert("Не выбрана фотография или не добавлено описание");
      throw new Error("Не выбрана фотография или не добавлено описание"); 
    }
    });
  };

// https://github.com/GlebkaF/webdev-hw-api/blob/main/pages/api/user/README.md#%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F
export function registerUser({ login, password, name, imageUrl }) {
  return fetch(baseHost + "/api/user", {
    method: "POST",
    body: JSON.stringify({
      login: sanitizeHtml(login),
      password: sanitizeHtml(password),
      name: sanitizeHtml(name),
      imageUrl,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Такой пользователь уже существует");
    }
    return response.json();
  });
}

export function loginUser({ login, password }) {
  return fetch(baseHost + "/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      login: sanitizeHtml(login),
      password: sanitizeHtml(password),
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    return response.json();
  });
}

// Загружает картинку в облако, возвращает url загруженной картинки
export function uploadImage({ file }) {
  const data = new FormData();
  data.append("file", file);

  return fetch(baseHost + "/api/upload/image", {
    method: "POST",
    body: data,
  }).then((response) => {
    return response.json();
  });
}

export const addLike = ({ id, token }) => {
  return fetch(`${postsHost}/${id}/like`, 
  {
    method: "POST",
    headers: {
      Authorization: token,
    }
  })
  .then((response) => {
    if (response.status === 401) {
      throw new Error("Нет авторизации");
    }
    return response.json();
  });
};

export const deleteLike = ({ id, token }) => {
  return fetch(`${postsHost}/${id}/dislike`, 
  {
    method: "POST",
    headers: {
      Authorization: token,
    }
  })
  .then((response) => {
    if (response.status === 401) {
      throw new Error("Нет авторизации");
    }
    return response.json();
  });
};
