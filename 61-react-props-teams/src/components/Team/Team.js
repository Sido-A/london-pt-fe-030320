import React from "react";
import Player from "./Player/Player";

const Team = (props) => {
  const { players } = props;
  console.log(players);
  players.map((m)=>{
    console.log(m.player);
    
  })

  return (
    <div className="team">
      {players.map((p) => (
        <Player player={p.player} />
      ))}
    </div>
  );
};

export default Team;
