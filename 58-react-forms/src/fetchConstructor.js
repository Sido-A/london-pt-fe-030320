import React, { useState } from "react";

const USER = "http://localhost:3000/users";

export const postUser = async (obj) => {
  const configObjectPost = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(obj),
  };
  return await fetch(USER, configObjectPost)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw "Oops something went wrong!";
      }
    })
    .catch((error) => error);
};

