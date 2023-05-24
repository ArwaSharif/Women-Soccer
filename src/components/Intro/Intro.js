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
        Learn more about women's national soccer teams!
      </p>
      <div className="styles.exploreTeamsContainer">
        {/* TO ADD LATER */}
        {/* <Link to='/FWWX23-teams'>
    <button>EXPLORE FIFA WOMEN'S WORLD CUP TEAMS 
      </button>
      </Link> */}
        <Link onClick={toggleComponent} to={showComponent ? "/" :"/all-teams" }>
          <button>EXPLORE</button>
        </Link>
      </div>
    </div>
  );
}
