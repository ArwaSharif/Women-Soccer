// import { useState } from "react";
// import styles from "./AddNewTeamPage.module.css";
// import { Component } from 'react';
// import { signUp } from '../../utilities/users-service';
// import NavBar from "../../components/NavBar/NavBar";
// import Logo from "../../components/Logo/Logo";
// import SignUpForm from "../../components/SignUpForm/SignUpForm";


// export default class AddNewTeamPage extends Component {
//   state = {
//     name: '',
//     nameAbbreviation: '',
//     flag: '',
//     highestScoringPlayerName: '',
//     // flag: '',
//     confirm: '',
//     error: '',
//   };

//   // The object passed to setState is merged with the current state object
//   handleChange = (evt) => {
//     this.setState({
//       [evt.target.name]: evt.target.value,
//     //   error: '',
//     });
//   };

//   handleSubmit = async (evt) => {
//     evt.preventDefault();
//     try {
//       // We don't want to send the 'error' or 'confirm' property,
//       //  so let's make a copy of the state object, then delete them
//       const formData = { ...this.state };
//     //   delete formData.error;
//       delete formData.confirm;

//       // The promise returned by the signUp service method
//       // will resolve to the user object included in the
//       // payload of the JSON Web Token (JWT)
//       const NewTeam = await signUp(formData); // the signUp() does token management 
//       // Baby step!
//       // console.log("Hello", user);

//       this.props.setNewTeam(NewTeam)
//     } catch {
//       // An error occurred
//       this.setState({ error: 'Please Fill out All the Fields' });
//     }
//   };

//   render() {
//     const disable = this.state !== this.state.confirm;
//     return (
//       <div>
//          <Logo />
//          {/* setUser={setUser} */}
//       <NavBar />
//         <div className="form-container">
//           <form autoComplete="off" onSubmit={this.handleSubmit}>
//             <label>Team Name:</label>
//             <input
//               type="text"
//               name="newTeamName"
//               value={this.state.newTeamName}
//               onChange={this.handleChange}
//               required
//             />
//             <label>How Many Times Was It Qualified To The World Cup</label>
//             <input
//               type="text"
//               name="timesQualified"
//               value={this.state.timesQualified}
//               onChange={this.handleChange}
//               required
//             />
//             <label>Coach Name</label>
//             <input
//               type="text"
//               name="coach"
//               value={this.state.coach}
//               onChange={this.handleChange}
//               required
//             />
//             <label>Highest Scoring Player</label>
//             <input
//               type="text"
//               name="highestScoring"
//               value={this.state.highestScoring}
//               onChange={this.handleChange}
//               required
//             />
//             <label>Confirm</label>
//             <input
//               type="password"
//               name="confirm"
//               value={this.state.confirm}
//               onChange={this.handleChange}
//               required
//             />
//             <button type="submit" disabled={disable}>
//               Submit New Team
//             </button>
//           </form>
//         </div>
//         {/* <p className="error-message">&nbsp;{this.state.error}</p> */}
//       </div>
//   )}
// }


// // render() {
// //   const disable = this.state !== this.state.confirm;
// //   const user = this.props.user
// //   return (
// //   //  {user ?
// //   //  (<>
// //     <div>
// //        <Logo />
// //     <NavBar setUser={setUser}/>
// //       <div className="form-container">
// //         <form autoComplete="off" onSubmit={this.handleSubmit}>
// //           <label>Team Name:</label>
// //           <input
// //             type="text"
// //             name="newTeamName"
// //             value={this.state.newTeamName}
// //             onChange={this.handleChange}
// //             required
// //           />
// //           <label>How Many Times Was It Qualified To The World Cup</label>
// //           <input
// //             type="text"
// //             name="timesQualified"
// //             value={this.state.timesQualified}
// //             onChange={this.handleChange}
// //             required
// //           />
// //           <label>Coach Name</label>
// //           <input
// //             type="text"
// //             name="coach"
// //             value={this.state.coach}
// //             onChange={this.handleChange}
// //             required
// //           />
// //           <label>Highest Scoring Player</label>
// //           <input
// //             type="text"
// //             name="highestScoring"
// //             value={this.state.highestScoring}
// //             onChange={this.handleChange}
// //             required
// //           />
// //           <label>Confirm</label>
// //           <input
// //             type="password"
// //             name="confirm"
// //             value={this.state.confirm}
// //             onChange={this.handleChange}
// //             required
// //           />
// //           <button type="submit" disabled={disable}>
// //             Submit New Team
// //           </button>
// //         </form>
// //       </div>
// //       {/* <p className="error-message">&nbsp;{this.state.error}</p> */}
// //     </div>
// // //     </>
// // //   )
// // //   :
// // //   (<>
// // //     <SignUpForm />
// // //     </>
// // //   )

// // // }
// // )}
