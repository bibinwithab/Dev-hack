import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'

function Home() {
  const [doubts, setDoubts] = useState([]);
  const [newDoubt, setNewDoubt] = useState({ doubt: '', answer: [] });
  const [teams, setTeams] = useState([]);
  const [newTeam, setNewTeam] = useState({ title: '', description: '', comment: [] });
  const [volunteers, setVolunteers] = useState([]);
  const [newVolunteer, setNewVolunteer] = useState({ title: '', description: '', comment: [] });

  useEffect(() => {
    // Fetch doubts
    axios.get('http://localhost:8000/doubts')
      .then(response => setDoubts(response.data))
      .catch(error => console.error('Error fetching doubts:', error));

    // Fetch teams
    axios.get('http://localhost:8000/team')
      .then(response => setTeams(response.data))
      .catch(error => console.error('Error fetching teams:', error));

    // Fetch volunteers
    axios.get('http://localhost:8000/volunteer')
      .then(response => setVolunteers(response.data))
      .catch(error => console.error('Error fetching volunteers:', error));
  }, []);

  const handleDoubtSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/doubts', newDoubt)
      .then(response => {
        setDoubts([...doubts, response.data]);
        setNewDoubt({ doubt: '', answer: [] });
      })
      .catch(error => console.error('Error creating new doubt:', error));
  };

  const handleTeamSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/team', newTeam)
      .then(response => {
        setTeams([...teams, response.data]);
        setNewTeam({ title: '', description: '', comment: [] });
      })
      .catch(error => console.error('Error creating new team:', error));
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/volunteer', newVolunteer)
      .then(response => {
        setVolunteers([...volunteers, response.data]);
        setNewVolunteer({ title: '', description: '', comment: [] });
      })
      .catch(error => console.error('Error creating new volunteer:', error));
  };

  return (
    <div className="Home">
      <h1>Doubts</h1>

      {/* Doubts Form */}
      <form onSubmit={handleDoubtSubmit}>
        <label>
          <input
            type="text"
            value={newDoubt.doubt}
            onChange={(e) => setNewDoubt({ ...newDoubt, doubt: e.target.value })}
            required
          />
        </label>
        <button type="submit">Submit Doubt</button>
      </form>

      {/* Display Doubts */}
      <ul>
        {doubts.map(doubt => (
          <li key={doubt._id}>
            <p>{doubt.doubt}</p>
            {/* Display answers for this doubt */}
            <ul>
              {doubt.answer.map((answer, index) => (
                <li key={index}>{answer}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h1>Teams</h1>

      {/* Teams Form */}
      <form onSubmit={handleTeamSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={newTeam.title}
            onChange={(e) => setNewTeam({ ...newTeam, title: e.target.value })}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={newTeam.description}
            onChange={(e) => setNewTeam({ ...newTeam, description: e.target.value })}
            required
          />
        </label>
        <button type="submit">Submit Team</button>
      </form>

      {/* Display Teams */}
      <ul>
        {teams.map(team => (
          <li key={team._id}>
            <h2>{team.title}</h2>
            <p>{team.description}</p>
          </li>
        ))}
      </ul>

      <h1>Volunteers</h1>

      {/* Volunteers Form */}
      <form onSubmit={handleVolunteerSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={newVolunteer.title}
            onChange={(e) => setNewVolunteer({ ...newVolunteer, title: e.target.value })}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={newVolunteer.description}
            onChange={(e) => setNewVolunteer({ ...newVolunteer, description: e.target.value })}
            required
          />
        </label>
        <button type="submit">Submit Volunteer</button>
      </form>

      {/* Display Volunteers */}
      <ul>
        {volunteers.map(volunteer => (
          <li key={volunteer._id}>
            <h2>{volunteer.title}</h2>
            <p>{volunteer.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
