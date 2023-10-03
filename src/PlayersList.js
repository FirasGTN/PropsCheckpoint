import React from "react";
import players from "./players";
import Player from "./components/Player";
import "./plist.css"

const PlayersList = () => {
  return (
    <div className="PlayersList">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;