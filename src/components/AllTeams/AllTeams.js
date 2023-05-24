import { useState, useEffect } from "react";
import styles from "./AllTeams.module.css";
// import { useNavigate } from "react-router-dom";
import * as newTeamAPI from '../../utilities/newTeam-api';
import {addFavorites} from '../../utilities/favorites-api'
import { useNavigate } from "react-router-dom";
// import {getTeams} from '../../utilities/newTeam-api'


export default function AllTeams({ user , setUser, teams, setTeams}) {
  const [team, setTeam] = useState([]); //an array
  //create a new state for the 
  useEffect(() => {
    // Load previous orders (paid)
    async function fetchGetTeams() {
      const teams = await newTeamAPI.getTeams();
      setTeam(teams);
      // If no orders, activeOrder will be set to null below
      console.log('this is team arry in fetch/useEffect AllTeams component', teams)
    }
    fetchGetTeams() 
  }, [])
  
  console.log('this is each team in arry', team)

  const navigate = useNavigate()
console.log('this is team state in all teams', teams)

async function handleAddToFav(evt) {
  const newFavorite = await evt.target._id;
  // setUser(newFavorite);
  addFavorites(newFavorite)
  console.log('this is fav', newFavorite)
  console.log(addFavorites(newFavorite))
  navigate('/favorites');
}

  return (
    <>
      <div className={styles.OtherTeams}>
      <h1>Other Teams</h1>
      <div className={styles.OtherTeamsList}>
        <ul>
        <li>
          {
          team.map((team, id) => <h1>{team}</h1>)
          }
          </li>
          </ul>
          </div>
          </div>
          </>
  );
}



// {teams.map((team, id) => {
//     return(
//       <>
//   <h4>
//     {teams.name}
//     <br />
//     {teams.abbreviation}
//   </h4>
//   <div className="addFavBtn">
//  <button
//    className="btn-sm"
//   onClick={handleAddToFav}
//   disabled={!user} type="submit">Add {/* team.name  */} To Your Favorite List
//    </button>

//  </div>
//       </>
//     )
//   })}
//   </ul>
// </div>
// </div>
// </> 