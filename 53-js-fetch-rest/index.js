// set base URL to your json server
// Ex: http://localhost:3000
const baseURL = "http://localhost:3000";
// const container = document.querySelector(".form_container");
// const textInput = document.querySelector(".textInput");
// const idInput = document.querySelector(".idInput");
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
 * create an async function {getComments}, which
 * gets data from URL and returns the data as JS objects
 *
 * Note: test this function with an URL from your json-server API
 */

const getComments = async () => {
  return await fetch(`${baseURL}/comments`).then((res) => res.json());
};

getComments();

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
  const configObjectPost = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newComment),
  };

  return await fetch(`${baseURL}/comments`, configObjectPost)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw "Oops something went wrong!";
      }
    })
    .catch((error) => error)
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

const patchComment = async (comment, newCommentBody) => {
  const configObjectPatch = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ body: newCommentBody }),
  };

  return await fetch(`${baseURL}/comments/${comment.id}`, configObjectPatch)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw "Oops we couldn't update that!";
      }
    })
    .catch((error) => error)
};

// patchComment({id:4},"new comment manually")

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

const putComment = async (comment) => {
  const configObjectPut = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(comment),
  };

  return await fetch(`${baseURL}/comments/${comment.id}`, configObjectPut)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw "Oops we couldn't update that!";
      }
    })
    .catch((error) => error)
};



/**
 * Exercise 5
 *
 * create an async function {deleteComment}, which takes {comment} as an argument,
 * and deletes the selected comment from DB.
 * This function should return "Deleted!" if successful,
 * or "That could not be deleted!" if not.
 *
 * Don't forget to handle errors.
 */

const deleteComment = async (comment) => {
  const configObjectDelete = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(comment),
  };
  return await fetch(`${baseURL}/comments/${comment.id}`, configObjectDelete)
    .then((res) => {
      if (res.ok) {
        return "Deleted!";
      } else {
        throw "That could not be deleted!";
      }
    })
    .catch((error) => error)
};

// container.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // console.log(idInput.value, textInput.value);

//   // patchComment({id: idInput.value},textInput.value);
// });
