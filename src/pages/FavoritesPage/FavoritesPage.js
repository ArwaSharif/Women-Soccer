import { useState } from "react";
import styles from "./FavoritesPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Logo from "../../components/Logo/Logo";

export default function FavoritesPage({setUser}) {
  //usseState OR props

  return (
    <div className={styles.AuthPage}>
      <Logo />
      <NavBar />
      {/* mapping over the specific user's fav list and presenting the items */}
      {/* each team will have a link to take to the team's info page */}
      <div className="favListDiv">
        <h1>{/* team.flag img */}</h1>
        <h1>
        team.name
          {/* team.name */}
          <br />
          abbrev
          {/* team.name.abbrev */}
        </h1>
      <div className="removefavBtn">
        <button>Remove {/* team.name  */} From Your Favorite List</button>
      </div>
      </div>
    </div>
  );
}
