import React, { useState, useEffect } from 'react'
import axios from 'axios';


function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios
      .get("/api/all")
      .then((users) => setUsers(users))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {users ? JSON.stringify(users) : "Loading"}
    </div>
  );
}

export default App;
