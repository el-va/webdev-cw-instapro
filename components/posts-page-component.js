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

              renderLike({ responseData, likeButton });
              likeButton.dataset.isLiked = "false";
            })
          : addLike({ id, token })
          .then((responseData) => {

              likeButton.innerHTML = `<img src="./assets/images/like-active.svg">`;

              renderLike({ responseData, likeButton });
              likeButton.dataset.isLiked = "true";
            });
      }
    });
  }
}

const renderLike = ({ responseData, likeButton }) => {

  const postLikesText = likeButton.closest('.post').querySelector(".post-likes-text");
  const likesCount = responseData.post.likes.length;

  let likesText = "";
  if (likesCount === 0) {
    likesText = `Нравится: <strong>0</strong>`;
  } else if (likesCount === 1) {
    likesText = `Нравится: <strong>${JSON.stringify(responseData.post.likes[0].name) === "{}" ? "Кому-то" : responseData.post.likes[0].name}</strong>` ;
  } else {
    const likesCounts = likesCount - 1;
    const likesTexts = `<strong>еще ${likesCounts.toString()}</strong>`;
    likesText = `Нравится: <strong>${JSON.stringify(responseData.post.likes[responseData.post.likes.length - 1].name) === "{}" ? "Кому-то" : responseData.post.likes[responseData.post.likes.length - 1].name}</strong> и ${likesTexts}`;
  }

  postLikesText.innerHTML = `<p>${likesText}</p>`;
};

export function renderPostsPageComponent({ appEl }) {
  // TODO: реализовать рендер постов из api
  console.log("Актуальный список постов:", posts);

  /**
   * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */

  const postsHtml = posts.map((post, index) => {
    let likesText;
    if (post.likes.length === 0) { 
      likesText = `Нравится: <strong>0</strong>`; 
    } else if (post.likes.length === 1) { 
      likesText = `Нравится: <strong>${JSON.stringify(post.likes[0].name) === "{}" ? "Кому-то" : post.likes[0].name}</strong>`; 
    } else { 
      const likesCounts = post.likes.length - 1; 
      const likesTexts = `<strong>еще ${likesCounts.toString()}</strong>`; 
      likesText = `Нравится: <strong>${JSON.stringify(post.likes[post.likes.length - 1].name) === "{}" ? "Кому-то" : post.likes[post.likes.length - 1].name}</strong> и ${likesTexts}`; 
    }
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
      <button data-post-id="${post.id}" data-is-liked="${
        post.isLiked
      }" class="like-button" data-index=${index}>
        <img src="${post.isLiked
            ? "./assets/images/like-active.svg"
            : "./assets/images/like-not-active.svg"
        }">
      </button>
      <p class="post-likes-text">
      ${likesText}
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
