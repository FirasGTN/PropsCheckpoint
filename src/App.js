import React from "react";
import PlayersList from "./PlayersList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Football Players</h1>
      </header>
      <div className="Player-card-container">
        <PlayersList />
      </div>
    </div>
  );
}

export default App;