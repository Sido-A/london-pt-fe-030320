import React, { useState } from "react";

/**
 * Create a User List app
 *
 * 1. create a state where you will store your users.
 * 2. I want to render all users from my state.
 * 3. add button with class "newUser"
 * 4. when I click on a "newUser" button I want to fetch a new user,
 * add it to state.
 * 5. On user element I want to have full name and button to remove a user.
 * 6. when I click "remove" button, it should remove selected user from my state.
 *
 * NOTE: API for random user - "https://randomuser.me/api/"
 *
 * FEEL FREE TO STYLE YOUR APP WITH CSS
 */

const URL = "https://randomuser.me/api/";

function App() {
  const [users, setUsers] = useState([]);

  const fetchAndAddUser = async () => {
    const addUser = (user) => setUsers([...users, user]);
    await fetch(URL)
      .then((res) => res.json())
      .then((res) => addUser(res));
  };

  const fullName = (u) => {
      const firstName = u.results[0].name.first;
      const lastName = u.results[0].name.last;
      return `${firstName} ${lastName}`;    
  };
  
  const removeUser = (user) => setUsers(users.filter((u) => u !== user));

  return (
    <div>
      <button onClick={fetchAndAddUser} className="newUser">
        New User
      </button>
      {users.map((u) => (
        <div className="user">
          <ul>
            <li>{fullName(u)}</li>
          </ul>

          <button onClick={() => removeUser(u)} className="removeUser">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
