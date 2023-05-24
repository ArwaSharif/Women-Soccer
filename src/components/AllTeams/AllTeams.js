import { useState, useEffect } from "react";
import styles from "./AllTeams.module.css";
// import { useNavigate } from "react-router-dom";
// import * as newTeamAPI from '../../utilities/newTeam-api';
import { addFavorites } from "../../utilities/favorites-api";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getTeams } from "../../utilities/newTeam-api";

export default function AllTeams({ user, setUser, teams, setTeams }) {
  const [team, setTeam] = useState([]); //an array

  //create a new state for the
  useEffect(() => {
    // Load previous orders (paid)
    async function fetchGetTeams() {
      const teamsData = await getTeams();
      setTeam(teamsData);
    }
    fetchGetTeams();
  }, []);

  const navigate = useNavigate();

  async function handleAddToFav(evt) {
    try {
      // const newFavorite = await evt.target._id;
      const newFavorite = await evt.target;
      // setUser(newFavorite);
      addFavorites(newFavorite);
      console.log("this is fav", newFavorite);
      console.log(addFavorites(newFavorite));
      navigate("/favorites");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className={styles.AllTeams}>
        <ul className={styles.AllTeamsList}>
          {team.map((t, i) => {
            console.log("this is t", t);
            return (
              <>
                <li key={i}>
                  <Link to={`/teams/${t.nameAbbreviation}`}>
                    <h1>{t.name}</h1>
                    <h1>{t.nameAbbreviation}</h1>
                  </Link>
                  <div className="addFavBtn">
                    <button
                      className="btn-sm"
                      onClick={handleAddToFav}
                      disabled={!user}
                    >
                      Add To Your Favorite List
                    </button>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
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
