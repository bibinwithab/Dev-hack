import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState([]);
  const [newUserData, setNewUserData] = useState({
    name: '',
    email: '',
    passingYear: '',
    department: '',
    bio: '',
  });

  const [doubtData, setDoubtData] = useState([]);
  const [newDoubtData, setNewDoubtData] = useState({ doubt: '', answer: [] });

  const [teamData, setTeamData] = useState([]);
  const [newTeamData, setNewTeamData] = useState({
    title: '',
    description: '',
    comment: [],
  });

  const [volunteerData, setVolunteerData] = useState([]);
  const [newVolunteerData, setNewVolunteerData] = useState({
    title: '',
    description: '',
    comment: [],
  });

  useEffect(() => {
    // Fetch data from your Express.js API endpoints for each data type
    const fetchData = async () => {
      try {
        const userDataResponse = await axios.get('http://localhost:8000/data');
        const doubtDataResponse = await axios.get('http://localhost:8000/doubts');
        const teamDataResponse = await axios.get('http://localhost:8000/team');
        const volunteerDataResponse = await axios.get('http://localhost:8000/volunteer');

        setUserData(userDataResponse.data);
        setDoubtData(doubtDataResponse.data);
        setTeamData(teamDataResponse.data);
        setVolunteerData(volunteerDataResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCreateUserData = async () => {
    try {
      await axios.post('http://localhost:8000/data', newUserData);
      setUserData([...userData, newUserData]);
      setNewUserData({
        name: '',
        email: '',
        passingYear: '',
        department: '',
        bio: '',
      });
    } catch (error) {
      console.error('Error creating user data:', error);
    }
  };

  const handleCreateDoubtData = async () => {
    try {
      await axios.post('http://localhost:8000/doubts', newDoubtData);
      setDoubtData([...doubtData, newDoubtData]);
      setNewDoubtData({ doubt: '', answer: [] });
    } catch (error) {
      console.error('Error creating doubt data:', error);
    }
  };

  const handleCreateTeamData = async () => {
    try {
      await axios.post('http://localhost:8000/team', newTeamData);
      setTeamData([...teamData, newTeamData]);
      setNewTeamData({ title: '', description: '', comment: [] });
    } catch (error) {
      console.error('Error creating team data:', error);
    }
  };

  const handleCreateVolunteerData = async () => {
    try {
      await axios.post('http://localhost:8000/volunteer', newVolunteerData);
      setVolunteerData([...volunteerData, newVolunteerData]);
      setNewVolunteerData({ title: '', description: '', comment: [] });
    } catch (error) {
      console.error('Error creating volunteer data:', error);
    }
  };

  return (<>
    <div className="App">
      <h1>Your React App</h1>

      <h2>User Data</h2>
      <ul>
        {userData.map((user) => (
          <li key={user._id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Add more user data fields */}
          </li>
        ))}
      </ul>

      <form>
        <input
          type="text"
          placeholder="Name"
          value={newUserData.name}
          onChange={(e) => setNewUserData({ ...newUserData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={newUserData.email}
          onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
        />
        {/* Add input fields for other user data fields */}
        <button type="button" onClick={handleCreateUserData}>
          Create User Data
        </button>
      </form>

      <h2>Doubt Data</h2>
      <ul>
        {doubtData.map((doubt) => (
          <li key={doubt._id}>
            <p>Doubt: {doubt.doubt}</p>
            <ul>
              {doubt.answer.map((answer, index) => (
                <li key={index}>Answer: {answer}</li>
              )}
            </ul>
          </li>
        ))}
      </ul>

      <form>
        <input
          type="text"
          placeholder="Doubt"
          value={newDoubtData.doubt}
          onChange={(e) => setNewDoubtData({ ...newDoubtData, doubt: e.target.value })}
        />
        {/* Add input fields for answers */}
        <button type="button" onClick={handleCreateDoubtData}>
          Create Doubt Data
        </button>
      </form>

      <h2>Team Data</h2>
      <ul>
        {teamData.map((team) => (
          <li key={team._id}>
            <p>Title: {team.title}</p>
            <p>Description: {team.description}</p>
            <ul>
              {team.comment.map((comment, index) => (
                <li key={index}>Comment: {comment}</li>
              )}
            </ul>
          </li>
        ))}
      </ul>

      <form>
        <input
          type="text"
          placeholder="Title"
          value={newTeamData.title}
          onChange={(e) => setNewTeamData({ ...newTeamData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTeamData.description}
          onChange={(e) => setNewTeamData({ ...newTeamData, description: e.target.value })}
        />
        {/* Add input fields for comments */}
        <button type="button" onClick={handleCreateTeamData}>
          Create Team Data
        </button>
      </form>

      <h2>Volunteer Data</h2>
      <ul>
        {volunteerData.map((volunteer) => (
          <li key={volunteer._id}>
            <p>Title: {volunteer.title}</p>
            <p>Description: {volunteer.description}</p>
            <ul>
              {volunteer.comment.map((comment, index) => (
                <li key={index}>Comment: {comment}</li>
              )}
            </ul>
          </li>
        ))}
      </ul>

      <form>
        <input
          type="text"
          placeholder="Title"
          value={newVolunteerData.title}
          onChange={(e) => setNewVolunteerData({ ...newVolunteerData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newVolunteerData.description}
          onChange={(e) => setNewVolunteerData({ ...newVolunteerData, description: e.target.value })}
        />
        {/* Add input fields for comments */}
        <button type="button" onClick={handleCreateVolunteerData}>
          Create Volunteer Data
        </button>
      </form>
    </div>
    </>
  );
}

export default App;
