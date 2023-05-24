import { useState, useEffect} from "react";
import styles from "./FavoritesPage.module.css";

export default function FavoritesPage({ user }, setUser) {
  // TO DO
  // adding to fav


  // const [favoriteTeam, setFavoriteTeam] = useState([]); //an array

  // //create a new state for the
  // useEffect(() => {
  //   // Load previous orders (paid)
  //   async function fetchGetTeams() {
  //     const teamsData = await getTeams();
  //     setTeam(teamsData);
  //   }
  //   fetchGetTeams();
  // }, []);

  // const navigate = useNavigate();

  // async function handleAddToFav(evt) {
  //   try {
  //     // const newFavorite = await evt.target._id;
  //     const newFavorite = await evt.target;
  //     // setUser(newFavorite);
  //     removeFavorites(newFavorite);
  //     console.log("this is fav", newFavorite);
  //     console.log(removeFavorites(newFavorite));
  //     navigate("/favorites");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <div className={styles.AuthPage}>
      {/* mapping over the specific user's fav list and presenting the items */}
      {/* each team will have a link to take to the team's info page */}
      {/* having the page renders only whe a user logged in */}
      {
        user && (
          <>
            <div className={styles.FavoritesPage}>
              {/* <h1>team.flag img</h1> */}
              <ul className={styles.FavoritesPageList}>
                Fav List
          {/* {favoriteTeam.map((t, i) => {
            console.log("this is t", t);
            return (
              <>
                <li key={i}>
                  <Link to={`/teams/${t.nameAbbreviation}`}>
                    <h1>{t.name}</h1>
                    <h1>{t.nameAbbreviation}</h1>
                  </Link>
                  <div className="removefavBtn">
                <button>
                  RemoveFrom Your Favorite List
                </button>
              </div>
                </li>
              </>
            );
          })} */}
        </ul>
              
            </div>
          </>
        )
        // : <AuthPage user={user} setUser={setUser}/>
      }
    </div>
  );
}
