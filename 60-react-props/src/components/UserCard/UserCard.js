import React from "react";

const UserCard = (props) => {
  const {user} = props;
  const { name, email, id } = user;

  return (
    <div className="card" key={id}>
          <p className="userName">
            <strong>Name:</strong> {name}</p>
          <p className="userEmail">
            <strong>Email:</strong> {email}</p>
    </div>
  );
};

export default UserCard;
