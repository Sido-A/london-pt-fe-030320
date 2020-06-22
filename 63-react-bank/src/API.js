const BASE_USER = "http://localhost:3000/users";

const fetchUser = async () => {
  return await fetch(BASE_USER)
    .then((res) => res.json())
    .then((res) => res);
};

export const newUser = async (newNew) => {
  console.log(newNew);
  
  const configObjectPost = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newNew),
  };

  return await fetch(BASE_USER, configObjectPost)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw "Oops something went wrong!";
      }
    })
    .catch((error) => error);
};

export default fetchUser;
