import React, { useState } from "react";
import Team from "./components/Team/Team";
import "./App.css";

/**
 * Exercise:
 * 
 * 1. Render all players in default column. Column class - "players".
 * 1.1 Layout for player item 
 * <li>
 * 		<span>{player}</span>
		<button>Team 1</button>
		<button>Team 2</button>
	</li>
 * 2. Each player in default column should have button to move to team 1
 * and button to move to team 2
 * 3. Create component <Team /> and pass players from each team to it.
 * 4. Create <Player /> component and inside <Team /> component use it to render
 * each player.
 * 5. When I click on a button to move a player to the selected team, that player 
 * should be removed from the main column and added to the corresponding team.
 * 6. div rendered by <Team/> should have class "team"
 * 7. div rendered by <Player/> should have class "player"
 */

const App = () => {
  const [players, setPlayers] = useState([
    "Tom",
    "Sam",
    "Vasile",
    "Guy",
    "Ben",
    "Daniel",
    "Ed",
    "Alex",
    "Andrew",
    "Mat",
  ]);

  const [setTeam1, setSetTeam1] = useState([]);
  const [setTeam2, setSetTeam2] = useState([]);
  
  const handleTeam = (e, player) => {
    const name = player.player
    
    const targetTeam = e.target.classList.value;
    if (targetTeam === "team1") {
      setSetTeam1([...setTeam1,player])
      setPlayers(players.filter((p) => p !== name));
    }else {
      setSetTeam2([...setTeam2, player]);
      setPlayers(players.filter((p) => p !== name));
    }
  };

  return (
    <div className="app">
      <div className="players">
        <ul>
          {players.map((player) => (
            <li key={player}>
              <span>{player}</span>
              <button
                className="team1"
                onClick={(e) => handleTeam(e, { player })}
              >
                Team 1
              </button>
              <button
                className="team2"
                onClick={(e) => handleTeam(e, { player })}
              >
                Team 2
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Team players={setTeam1} />
      <Team players={setTeam2} />
    </div>
  );
};

export default App;
