import { useState, useEffect } from "react";
import Home from "./components/Home";

function App() {
  const [usersState, setUsersState] = useState({ users: [] });

  useEffect(() => {
    async function getUsers() {
      try {
        const users = await fetch("")
        .then(response => response.json())
        setUsersState({ users })
      } catch (error) {
        console.log(error)
      }
    }
   getCrypto();
}, []);
    
return (
      <div className="App">
        <Home users={usersState.users} />
      </div>
    );
}

export default App;