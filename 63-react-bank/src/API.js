const BASE_USER = "http://localhost:3000/users";

const fetchUser = async () => {
  return await fetch(BASE_USER)
    .then((res) => res.json())
    .then((res) => res);
};


export default fetchUser;
