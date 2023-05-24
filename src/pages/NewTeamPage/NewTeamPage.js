import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      }
    </div>
  );
}
