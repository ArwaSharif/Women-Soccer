import styles from "./Intro.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Intro() {
  const [showComponent, setShowComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };
  return (
    <div className={styles.Intro}>
      <h1>Women's Soccer </h1>
      <p>
        Learn more about the teams participating in the upcoming FIFA World
        Women’s Cup!
      </p>
      <div className="styles.exploreTeamsContainer">
        {/* <Link to='/FWWX23-teams'>
    <button>EXPLORE FIFA WOMEN'S WORLD CUP TEAMS 
      </button>
      </Link> */}
        <Link onClick={toggleComponent} to={showComponent ? "/all-teams" : "/"}>
          <button>EXPLORE OTHER WOMEN'S NATIONAL TEAMS</button>
        </Link>
      </div>
    </div>
  );
}
