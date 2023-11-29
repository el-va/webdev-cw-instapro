import { USER_POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage, getToken } from "../index.js";
import { addLike, deleteLike } from "../api.js";
import { formatDate } from "../lib/formatDate/formatDate.js";

export function LikeDislike() {
  const likeButtons = document.querySelectorAll(".like-button");

  for (const likeButton of likeButtons) {
    likeButton.addEventListener("click", (event) => {
      event.stopPropagation();

      let id = likeButton.dataset.postId;
      let token = getToken();

      if (token === undefined) {
        alert("Ставить лайки могут только авторизованные пользователи");
      } else {
        likeButton.dataset.isLiked === "true"
  
          ? deleteLike({ id, token })
          .then((responseData) => {

              likeButton.innerHTML = `<img src="./assets/images/like-not-active.svg">`;

              renderLike({ responseData });
              likeButton.dataset.isLiked = "false";
            })
          : addLike({ id, token })
          .then((responseData) => {

              likeButton.innerHTML = `<img src="./assets/images/like-active.svg">`;

              renderLike({ responseData });
              likeButton.dataset.isLiked = "true";
            });
      }
    });
  }
}

const renderLike = ({ responseData }) => {

  const postLikesText = document.querySelector(".post-likes-text");
  postLikesText.innerHTML = `<p class="post-likes-text">
    Нравится: <strong>${
      responseData.post.likes.length < 2
        ? `<strong>${
            0 === responseData.post.likes.length
              ? "0"
              : responseData.post.likes.map(({ name: post }) => post).join(", ")
          }</strong>`
        : `<strong>${
            responseData.post.likes[
              Math.floor(Math.random() * responseData.post.likes.length)
             ].name
          }</strong>
      и <strong>еще ${(responseData.post.likes.length - 1).toString()}</strong>`
    }
    </strong>
  </p>`;
};

export function renderPostsPageComponent({ appEl }) {
  // TODO: реализовать рендер постов из api
  console.log("Актуальный список постов:", posts);

  /**
   * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */

  const postsHtml = posts.map((post, index) => {
    return `
    <li class="post">
    <div class="post-header" data-user-id="${post.user.id}">
      <img src="${post.user.imageUrl}" class="post-header__user-image">
      <p class="post-header__user-name">${post.user.name}</p>
    </div>
    <div class="post-image-container">
      <img class="post-image" src="${post.imageUrl}">
    </div>
    <div class="post-footer">
    <div class="post-likes">
      <button data-post-id="${post.id}" data-isLiked="${
        post.isLiked
      }" class="like-button" data-index=${index}>
        <img src="${post.isLiked
            ? "./assets/images/like-active.svg"
            : "./assets/images/like-not-active.svg"
        }">
      </button>
      <p class="post-likes-text">
      Нравится: <strong>${post.likes.length}</strong>
    </p>
    </div>
    </div>
    <p class="post-text">
      <span class="user-name">${post.user.name}</span>
      ${post.description}
    </p>
    <p class="post-date">
    ${formatDate(post.createdAt)}
    </p>
  </li>`;
    })
    .join('');

  const appHtml = `
    <div class="page-container">
      <div class="header-container"></div>
      <ul class="posts">
      ${postsHtml}
      </ul>
    </div>`;

  appEl.innerHTML = appHtml;

  LikeDislike();

  renderHeaderComponent({
    element: document.querySelector(".header-container"),
  });

  for (let userEl of document.querySelectorAll(".post-header")) {
    userEl.addEventListener("click", () => {
      goToPage(USER_POSTS_PAGE, {
        id: userEl.dataset.userId,
      });
    });
  }
}
