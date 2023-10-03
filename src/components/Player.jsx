import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, number, age, url }) => {
  return (
    <Card style={{ width: "19rem", margin: "10px"}} className="Player-card" >
      <figure style={{height:"415px", display:"flex", alignItems:"center"}}>
      <Card.Img variant="top" src={url} />
      </figure>
      <Card.Body >
        <Card.Title ><p className="title">{name}</p></Card.Title>

        <Card.Text>
        <span className="Player-attribute">Team:</span> {team}
        </Card.Text>
        <hr />
        <Card.Text>
        <span className="Player-attribute">Nationality:</span> {nationality}
        </Card.Text>
        <hr />
        <Card.Text>
        <span className="Player-attribute">Jersey Number:</span> {number}
          </Card.Text>
        <hr />
        <Card.Text>  
        <span className="Player-attribute">Age:</span> {age}
        </Card.Text>

      </Card.Body>
    </Card>
  );
};

export default Player;