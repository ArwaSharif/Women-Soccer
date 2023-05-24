import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import { addNewTeam } from "../../utilities/newTeam-api";

export default function NewOtherTeamPage({ user, serUser, teams, setTeams }) {
  const [name, setName] = useState("");
  const [nameAbbreviation, setNameAbbreviation] = useState("");
  const [highestScoringPlayerName, setHighestScoringPlayerName] = useState("");
  const [coach, setCoach] = useState("");
  const [error, setError] = useState("");

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setError("");
    switch (name) {
      case "name":
        setName(value);
        break;
      case "nameAbbreviation":
        setNameAbbreviation(value);
        break;
      case "highestScoringPlayerName":
        setHighestScoringPlayerName(value);
        break;
      case "coach":
        setCoach(value);
        break;
      default:
        break;
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = {
        name,
        nameAbbreviation,
        highestScoringPlayerName,
        coach,
      };
      await addNewTeam(formData);
      navigate("/");
    } catch {
      setError("Please Fill Out All the Fields");
    }
  };

  return (
    <div>
      {/* having the page renders only whe a user logged in */}
      {
        user && (
          <>
            <div className="newTeamForm-container">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Team Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  style={{ textTransform: "uppercase" }}
                  required
                />
                <label>Name Abbreviation</label>
                <input
                  type="text"
                  name="nameAbbreviation"
                  value={nameAbbreviation}
                  onChange={handleChange}
                  maxLength="3"
                  style={{ textTransform: "uppercase" }}
                  required
                />
                <label>Highest Scoring Player</label>
                <input
                  type="text"
                  name="highestScoringPlayerName"
                  value={highestScoringPlayerName}
                  onChange={handleChange}
                  defaultValue="N/A"
                />
                <label>Coach Name</label>
                <input
                  type="text"
                  name="coach"
                  value={coach}
                  onChange={handleChange}
                  defaultValue="N/A"
                />
                <button type="submit">Add New Team</button>
              </form>
            </div>
          </>
        )
        // : (
        //   <AuthPage />
        // )
      }
    </div>
  );
}

// // src/components/.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)

// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import styles from "./NewTeamPage.module.css";
// import { Component } from "react";
// import { Navigate } from "react-router-dom";
// import AuthPage from "../AuthPage/AuthPage";
// import { addNewTeam } from "../../utilities/newTeam-api";

// // export default class NewOtherTeamPage extends Component {
//   export default class NewOtherTeamPage extends Component {
//   state = {
//     name: "",
//     nameAbbreviation: "",
//     // flag: '',
//     highestScoringPlayerName: "",
//     coach: "",
//     confirm: "",
//     error: "",
//   };

//   // The object passed to setState is merged with the current state object
//   handleChange = (evt) => {
//     this.setState({
//       [evt.target.name]: evt.target.value,
//       error: "",
//     });
//   };

//   handleSubmit = async (evt) => {
//     evt.preventDefault();
//     // const clickedBtnNewTeam = this.props.btn && !this.props.btn
//     // const navigate = Navigate()
//     try {
//       const formData = { ...this.state };
//       delete formData.confirm;
//       delete formData.error;
//       // console.log(formData);
//       await addNewTeam(formData);
//       // this.props.setBtn(!this.props.btn);
//       Navigate('/');
//       // this.props.navigation.navigate('/')
//     } catch {
//       // An error occurred
//       this.setState({ error: "Please Fill Out All the Fields" });
//     }
//   };

//   handleCaps = (text) => {
//     let newText = text.toUpperCase()
//     return newText
//   };

//   render() {
//     // const disable = this.state !== this.state.confirm;

//     return (
//       <div>
//         {this.props.user ? (
//           <>
//             <div className="newTeamForm-container">
//               <form autoComplete="off" onSubmit={this.handleSubmit}>
//                 <label>Team Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={this.state.name}
//                   onChange={this.handleChange}
//                   required
//                 />
//                 <label>Name Abbreviation</label>
//                 <input
//                   type="text"
//                   name="nameAbbreviation"
//                   value={this.state.nameAbbreviation}
//                   onChange={this.handleChange}
//                   maxLength="3"
//                   style={{textTransform:"uppercase"}}
//                   required
//                 />
//                 <label>Highest Scoring Player</label>
//                 <input
//                   type="text"
//                   name="highestScoringPlayerName"
//                   value={this.state.highestScoringPlayerName}
//                   onChange={this.handleChange}
//                   defaultValue="N/A"
//                 />
//                 <label>Coach Name</label>
//                 <input
//                   type="text"
//                   name="coach"
//                   value={this.state.coach}
//                   onChange={this.handleChange}
//                   defaultValue="N/A"
//                 />
//                 {/* <button type="submit" onClick={this.handleNavigateToBasePage}> */}
//                 <button type="submit">Add New Team</button>
//               </form>
//             </div>
//           </>
//         ) : (
//           <AuthPage />
//         )}
//       </div>
//     );
//   }
// }
