import React from "react";

const Player = (props) => {
  const { player } = props;

  return (
    <div className="player">
      <ul>
        <li key={player}>{player}</li>
      </ul>
    </div>
  );
};

export default Player;
