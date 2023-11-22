import { USER_POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage, getToken } from "../index.js";
// import { formatDistanceToNow } from "date-fns";
// import { ru } from "date-fns/locale";
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

  // const appHtml = `
  //             <div class="page-container">
  //               <div class="header-container"></div>
  //               <ul class="posts">
  //                 <li class="post">
  //                   <div class="post-header" data-user-id="642d00329b190443860c2f31">
  //                       <img src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" class="post-header__user-image">
  //                       <p class="post-header__user-name">Иван Иваныч</p>
  //                   </div>
  //                   <div class="post-image-container">
  //                     <img class="post-image" src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg">
  //                   </div>
  //                   <div class="post-likes">
  //                     <button data-post-id="642d00579b190443860c2f32" class="like-button">
  //                       <img src="./assets/images/like-active.svg">
  //                     </button>
  //                     <p class="post-likes-text">
  //                       Нравится: <strong>2</strong>
  //                     </p>
  //                   </div>
  //                   <p class="post-text">
  //                     <span class="user-name">Иван Иваныч</span>
  //                     Ромашка, ромашка...
  //                   </p>
  //                   <p class="post-date">
  //                     19 минут назад
  //                   </p>
  //                 </li>
  //                 <li class="post">
  //                   <div class="post-header" data-user-id="6425602ce156b600f7858df2">
  //                       <img src="https://storage.yandexcloud.net/skypro-webdev-homework-bucket/1680601502867-%25C3%2590%25C2%25A1%25C3%2590%25C2%25BD%25C3%2590%25C2%25B8%25C3%2590%25C2%25BC%25C3%2590%25C2%25BE%25C3%2590%25C2%25BA%2520%25C3%2591%25C2%258D%25C3%2590%25C2%25BA%25C3%2591%25C2%2580%25C3%2590%25C2%25B0%25C3%2590%25C2%25BD%25C3%2590%25C2%25B0%25202023-04-04%2520%25C3%2590%25C2%25B2%252014.04.29.png" class="post-header__user-image">
  //                       <p class="post-header__user-name">Варварва Н.</p>
  //                   </div>
                  
                    
  //                   <div class="post-image-container">
  //                     <img class="post-image" src="https://storage.yandexcloud.net/skypro-webdev-homework-bucket/1680670675451-%25C3%2590%25C2%25A1%25C3%2590%25C2%25BD%25C3%2590%25C2%25B8%25C3%2590%25C2%25BC%25C3%2590%25C2%25BE%25C3%2590%25C2%25BA%2520%25C3%2591%25C2%258D%25C3%2590%25C2%25BA%25C3%2591%25C2%2580%25C3%2590%25C2%25B0%25C3%2590%25C2%25BD%25C3%2590%25C2%25B0%25202023-03-31%2520%25C3%2590%25C2%25B2%252012.51.20.png">
  //                   </div>
  //                   <div class="post-likes">
  //                     <button data-post-id="642cffed9b190443860c2f30" class="like-button">
  //                       <img src="./assets/images/like-not-active.svg">
  //                     </button>
  //                     <p class="post-likes-text">
  //                       Нравится: <strong>35</strong>
  //                     </p>
  //                   </div>
  //                   <p class="post-text">
  //                     <span class="user-name">Варварва Н.</span>
  //                     Нарисовала картину, посмотрите какая красивая
  //                   </p>
  //                   <p class="post-date">
  //                     3 часа назад
  //                   </p>
  //                 </li>
  //                 <li class="post">
  //                   <div class="post-header" data-user-id="6425602ce156b600f7858df2">
  //                       <img src="https://storage.yandexcloud.net/skypro-webdev-homework-bucket/1680601502867-%25C3%2590%25C2%25A1%25C3%2590%25C2%25BD%25C3%2590%25C2%25B8%25C3%2590%25C2%25BC%25C3%2590%25C2%25BE%25C3%2590%25C2%25BA%2520%25C3%2591%25C2%258D%25C3%2590%25C2%25BA%25C3%2591%25C2%2580%25C3%2590%25C2%25B0%25C3%2590%25C2%25BD%25C3%2590%25C2%25B0%25202023-04-04%2520%25C3%2590%25C2%25B2%252014.04.29.png" class="post-header__user-image">
  //                       <p class="post-header__user-name">Варварва Н.</p>
  //                   </div>
                  
                    
  //                   <div class="post-image-container">
  //                     <img class="post-image" src="https://leonardo.osnova.io/97a160ca-76b6-5cba-87c6-84ef29136bb3/">
  //                   </div>
  //                   <div class="post-likes">
  //                     <button data-post-id="642cf82e9b190443860c2f2b" class="like-button">
  //                       <img src="./assets/images/like-not-active.svg">
  //                     </button>
  //                     <p class="post-likes-text">
  //                       Нравится: <strong>0</strong>
  //                     </p>
  //                   </div>
  //                   <p class="post-text">
  //                     <span class="user-name">Варварва Н.</span>
  //                     Голова
  //                   </p>
  //                   <p class="post-date">
  //                     8 дней назад
  //                   </p>
  //                 </li>
  //               </ul>
  //             </div>`;

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
