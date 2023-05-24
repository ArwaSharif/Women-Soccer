// src/components/.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewTeamPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Logo from "../../components/Logo/Logo";
import { Component } from 'react';
import AuthPage from "../AuthPage/AuthPage";
import { addNewTeam } from '../../utilities/newTeam-api';


// export default class NewOtherTeamPage extends Component {
export default class NewOtherTeamPage extends Component {
  state = {
    name: '',
    nameAbbreviation: '',
    // flag: '',
    highestScoringPlayerName: '',
    coach: '',
    confirm: '',
    error: '',
  };

   // The object passed to setState is merged with the current state object
   handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: '',
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
      // const clickedBtnNewTeam = this.props.btn && !this.props.btn 
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      console.log(formData)
      await addNewTeam(formData)
      this.props.setBtn(!this.props.btn)
      // navigate('/');

    } catch {
      // An error occurred
      this.setState({ error: 'Please Fill Out All the Fields' });
    }
  };




render() {
  // const disable = this.state !== this.state.confirm;

  return (
    <div>
      {this.props.user ? 
      (<>
      <div className="newTeamForm-container">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>Team Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <label>Team Name Abbreviation </label>
          <input
            type="text"
            name="nameAbbreviation"
            value={this.state.nameAbbreviation}
            onChange={this.handleChange}
            required
          />
          <label>Highest Scoring Player</label>
          <input
            type="text"
            name="highestScoringPlayerName"
            value={this.state.highestScoringPlayerName}
            onChange={this.handleChange}
            required
          />
          <label>Coach Name</label>
          <input
            type="text"
            name="coach"
            value={this.state.coach}
            onChange={this.handleChange}
            required
          />
          {/* <button type="submit" onClick={this.handleNavigateToBasePage}> */}
          {/* <button type="submit" onClick={this.handleNavigateToBasePage}> */}
          <button type="submit" >
            Add New Team
          </button>
        </form>
      </div>
    </>)
    : 
    <AuthPage />
  }
  </div>
  );
}
}
// {/* <p className="error-message">&nbsp;{this.state.error}</p> */}
// }
//   return (
//     <div className={styles.TeamInfo}>
     
//       {/* making sure the team clicked on in the app page is the same, THEN populate info */}
//       <div className="teamInfo">
//       <h1>team.flag img{/* team.flag img */}</h1>
//         <h1>team.name{/* team.name */}
//         <br />
//         (team.name.abbrev)
//         ({/* team.name.abbrev */})
//         </h1>
//         <h2>Times Qualified To The World Cup:</h2>
//         <br />
//         <h3>{/* team.cupParticipation */}</h3>
//         <h2>Highest Scoring Player:</h2>
//         <br />
//         <h3>Player Name {/* team.highestScoringPlayer.name */} | {/* team.mostScoringPlayer.goals */} Goals.</h3>
//         <h2>Coach:</h2>
//         <br />
//         <h3>Coach Name{/* team.coach */}</h3>
//         <h2>Players Roster:</h2>
//         <br />
//         {/* Mappting over the players list and populating based on */}
//         <li> <h3>#: {/* team.player.num */} | Name: {/* team.player.name */} </h3>
//         <br/>
//         <h3>Age: {/* team.player.age */} | Position: {/* team.player.position */} | Club: {/* team.player.club */}</h3>
//         </li> 
//       </div>
//       <div className="addFavBtn">

//         <button
//         className="btn-sm"
//         // onClick={handleAddToFav}
//         disabled={!user}>Add {/* team.name  */} To Your Favorite List
//         </button>
//       </div>
//     </div>
//   );
// }
