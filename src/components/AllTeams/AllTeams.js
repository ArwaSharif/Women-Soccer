import { useState } from "react";
import styles from "./AllTeams.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function AllTeams({ user }, setUser) {

  const navigate = useNavigate()
async function handleAddToFav() {
  // await favoritesAPI.addToFav();
  navigate('/favorites');
}


  return (
    <>
      <div className={styles.OtherTeams}>
      <h1>Other Teams</h1>
      <div className={styles.OtherTeamsList}>
        <h4>
          otherTeam.flag
          {/* otherTeam.flag ? otherTeam.flag : otherTeam.flagPlaceholder **find a way to make the container's background white */}
          <br />
          otherTeam.name
          {/* otherTeam.name */}
          <br />
          otherTeam.name.abbrev
          {/* otherTeam.name.abbrev */}
        </h4>
        <div className="addFavBtn">
       <button
         className="btn-sm"
        onClick={handleAddToFav}
        disabled={!user}>Add {/* team.name  */} To Your Favorite List
         </button>
       </div>
      </div>
      </div>
    </>
  );
}
