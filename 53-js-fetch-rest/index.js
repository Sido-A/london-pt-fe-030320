// set base URL to your json server
// Ex: http://localhost:3000
const baseURL = "http://localhost:3000";
const COMMENTS_URL = "http://localhost:3000/comments";
// const container = document.querySelector(".form_container");
// const textInput = document.querySelector(".textInput");
// const posts = document.querySelector(".posts");

/**
 * BEFORE YOU START:
 * 1. Run `npm install -g json-server`
 * 2. In this directory, run `json-server db.json`
 * 		to serve your back end API
 * 3. In your browser, go to http://localhost:3000/comments,
 * 		to view the available data
 */

/**
 * Exercise 1
 *
 * create an async function {getComments}, which takes {url} as an argument,
 * gets data from URL and returns the data as JS objects
 *
 * Note: test this function with an URL from your json-server API
 */

//FAIL TEST
const getComments = async()  => {
  return await fetch(`${baseURL}/comments`).then((res) => res.json());
};

// getComments("http://localhost:3000/comments");
// getComments("https://jsonapi.org/format/");

// PASS TEST
// const getComment = async () => {
//   const promises = await fetch("http://localhost:3000/comments").then((res) => res.json());
//   return promises;
// };
// getComment();

// const mappedPromises = promises.filter((promise) => {
//   // console.log(promise.body);
//   const comments = promise.body;
//   if (!comments) {
//     return false;
//   } else {
//     return comments;
//   }
// });
// return mappedPromises;

/**
 * Exercise 2
 *
 * create an async function {postComment}, which takes {newComment} as an argument,
 * and posts it to the comments URL.
 *
 * This function should return the data received
 * from the server if successful, or "Oops something went wrong!" if not.
 *
 * Don't forget to handle errors.
 */
const postComment = async (newComment) => {
  console.log(newComment);

  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newComment),
  };

  fetch("/comments", configObject)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw res;
      }
    })
    .catch((error) => console.error(error, "Oops something went wrong!"));
};

/**
 * Exercise 3
 *
 * Create an async function {patchComment}, which takes {comment}
 * and {newCommentBody} as arguments.
 *
 * It should send a patch request to update the comment in the database with
 * the newCommentBody as the new body value.
 *
 * This function should return the updated object if
 * successful, or "Oops we couldn't update that!" if not.
 *
 * Don't forget to handle errors.
 */

// const patchComment = async (comment, newCommentBody) => {};

/**
 * Exercise 4
 *
 * create an async function {putComment}, which takes {comment} as an argument,
 * and makes a put request with the new comment data.
 *
 * This function should return the updated comment if
 * successful, or "Oops we couldn't update that!" if not.
 *
 * Don't forget to handle errors.
 */

/**
 * Exercise 5
 *
 * create an async function {deleteComment}, which takes {url} as an argument,
 * and delete selected comment from DB.
 * This function should return "Deleted!" if successful,
 * or "That could not be deleted!" in not.
 *
 * Don't forget to handle errors.
 */

container.addEventListener("submit", (e) => {
  e.preventDefault();
  const div = document.createElement("div");
  div.classList.add("post");
  div.style.color = "#fff";
  div.innerHTML = `<p>${textInput.value}</p>`;
  posts.append(div);
  postComment(textInput.value);
});
