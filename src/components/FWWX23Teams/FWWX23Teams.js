import styles from "./FWWX23Teams.module.css";
import Table from "react-bootstrap/Table";
import { useState } from "react";
// import a link or the teams info page
import { Link, useNavigate } from "react-router-dom";

export default function FWWX23Teams({ user }, setUser) {
  //usseState OR props
  // const teams = this.props.teams
  const navigate = useNavigate()
async function handleAddToFav() {
  // await favoritesAPI.addToFav();
  navigate('/favorites');
}
  return (
    // MAKING SURE TABLES ARE SEPARATED TO 2 ROWS
    <div className={styles.div}>
      {/* populating all teams in db, groups A to H, based on groups making sure the team clicked on take to the TeamInfoPage */}
      <div className="FWWX23TeamsInfo">
        {/* mapping based on groups and populating a list */}
        <Table striped bordered hover>
          {/* Group.letter */}
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>Flag</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            
            </tr>
          </tbody>
        </Table>
        <div className="addFavBtn">
       <button
         className="btn-sm"
        onClick={handleAddToFav}
        disabled={!user}>Add {/* team.name  */} To Your Favorite List
         </button>
       </div>
      </div>
    </div>
//  {/* mapping based on groups and populating a list */}
        //  {teams.map((team, idx) => {
        // const { num, name, abbreviation, flag } = team;
        // // console.log("this is stock name s", stock);
        // return (
        //   <div>
        //     <Link to={`/team/${abbreviation}`}>
        //        <Table striped bordered hover>
        //   {/* Group.letter */}
        //   <thead>
        //     <tr>
        //       <th>#</th>
        //       <th>Team</th>
        //       <th>Flag</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     <tr>
        //       <td>team.num{/* Group.letter.team.num */}</td>
        //       <td>
        //       team.name{/* Group.letter.team.name */} (abbrev
        //         {/* Group.letter.team.name.abbrev */})
        //       </td>
        //       <td>team.flag{/* Group.letter.team.flag img */}</td>
        //     </tr>
        //   </tbody>
        // </Table>
        //     </Link> 
        //     </div> 
  );
}


// <td>team.num{/* Group.letter.team.num */}</td>
// <td>
// team.name{/* Group.letter.team.name */} (abbrev
//   {/* Group.letter.team.name.abbrev */})
// </td>
// <td>team.flagGroup.letter.team.flag img</td>