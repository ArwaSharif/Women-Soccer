import { useState } from "react";
import styles from "./TeamInfo.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Logo from "../../components/Logo/Logo";

export default function TeamsInfo() {
//usseState OR props

  return (
    <div className={styles.TeamInfo}>
      {/* <Logo /> */}
      {/* <NavBar /> */}
      {/* making sure the team clicked on in the app page is the same, THEN populate info */}
      <div className="teamInfo">
      {/* <h1>team.flag img</h1> */}
        <h1>{/* team.name */}
        <br />
        {/* team.nameAbbreviation  */}
        </h1>
        <h2>Times Qualified To The World Cup:</h2>
        <br />
        <h3>{/* team.cupParticipation */}</h3>
        <h2>Highest  Scoring Player</h2>
        <br />
        <h3>Name: {/* team.highestScoringPlayerName */} | {/* team.mostScoringPlayer.goals */} Goals.</h3>
        <h2>Coach:</h2>
        <br />
        <h3>{/* team.coach */}</h3>
        <h2>Players Roster:</h2>
        <br />
        {/* Mappting over the players list and populating based on */}
        <li> <h3>#: {/* team.playersRoster.playerNum */} | Name: {/* team.playersRoster.playerName */} </h3>
        <br/>
        <h3>Age: {/* team.playersRoster.playerAge */} | Position: {/* team.playersRoster.playerPosition */} | Club: {/* team.player.playerClub */}</h3>
        </li> 
      </div>
      <div className="addFavBtn">
        <button>Add {/* team.name  */} To Your Favorite List</button>
      </div>
    </div>
  );
}
